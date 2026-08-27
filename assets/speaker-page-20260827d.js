(() => {
  const fileInput = document.querySelector('#profile_photo');
  const preview = document.querySelector('#photoPreview');
  const status = document.querySelector('#photoStatus');
  const form = document.querySelector('#speakerForm');

  let preparedPhoto = null;
  let isProcessing = false;
  const MAX_ORIGINAL = 9 * 1024 * 1024;
  const MAX_DIMENSION = 2400;

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes)) return '';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(mb >= 1 ? 1 : 2)} MB`;
  };

  const isHeic = (file) => {
    const type = (file?.type || '').toLowerCase();
    const name = (file?.name || '').toLowerCase();
    return type === 'image/heic' || type === 'image/heif' || /\.(heic|heif)$/i.test(name);
  };

  const setStatus = (text = '', state = '') => {
    if (!status) return;
    status.textContent = text;
    status.className = `sp-upload-status${state ? ` is-${state}` : ''}`;
  };

  const showPreview = (blob) => {
    if (!preview || !blob) return;
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.alt = 'Photo preview';
    img.onload = () => URL.revokeObjectURL(url);
    img.src = url;
    preview.replaceChildren(img);
  };

  const loadImage = (file) => new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('This image format could not be read on this device.'));
    };
    img.src = url;
  });

  const canvasToBlob = (canvas, type, quality) => new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Could not prepare this image.')), type, quality);
  });

  const normalisePhoto = async (file) => {
    const img = await loadImage(file);
    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    if (!width || !height) throw new Error('Could not read the image dimensions.');

    const scale = Math.min(1, MAX_DIMENSION / Math.max(width, height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    let blob = await canvasToBlob(canvas, 'image/jpeg', 0.88);
    if (blob.size > 8 * 1024 * 1024) blob = await canvasToBlob(canvas, 'image/jpeg', 0.76);
    if (blob.size > 8.8 * 1024 * 1024) blob = await canvasToBlob(canvas, 'image/jpeg', 0.64);
    if (blob.size > MAX_ORIGINAL) throw new Error('The prepared image is still too large. Please choose a smaller photo.');

    const stem = (file.name || 'futureedge-photo').replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-');
    return new File([blob], `${stem || 'futureedge-photo'}.jpg`, { type: 'image/jpeg', lastModified: Date.now() });
  };

  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    preparedPhoto = null;
    if (!file) {
      if (preview) preview.textContent = '+';
      setStatus('');
      return;
    }

    if (file.size > MAX_ORIGINAL) {
      fileInput.value = '';
      if (preview) preview.textContent = '+';
      setStatus('That photo is over 9 MB. Please choose a smaller version.', 'error');
      return;
    }

    const needsConversion = isHeic(file) || file.size > 7 * 1024 * 1024;
    if (!needsConversion) {
      preparedPhoto = file;
      showPreview(file);
      setStatus(`Ready to send: ${file.name} · ${formatBytes(file.size)}`, 'ready');
      return;
    }

    isProcessing = true;
    setStatus(isHeic(file) ? 'Preparing your iPhone photo as a JPEG...' : 'Optimising your photo for upload...', 'working');
    try {
      preparedPhoto = await normalisePhoto(file);
      showPreview(preparedPhoto);
      setStatus(`Ready to send: ${preparedPhoto.name} · ${formatBytes(preparedPhoto.size)}`, 'ready');
    } catch (err) {
      preparedPhoto = null;
      setStatus(err?.message || 'We could not prepare that photo. Please choose a JPG or PNG instead.', 'error');
    } finally {
      isProcessing = false;
    }
  });

  // Safari/iOS supports the formdata event. This keeps the form as a normal
  // browser multipart POST (more reliable for file uploads than AJAX on iPhone)
  // while replacing HEIC/large originals with the prepared JPEG attachment.
  form?.addEventListener('formdata', (event) => {
    if (!preparedPhoto) return;
    event.formData.delete('attachment');
    event.formData.append('attachment', preparedPhoto, preparedPhoto.name);
    event.formData.set('Photo filename', preparedPhoto.name);
    event.formData.set('Photo size', formatBytes(preparedPhoto.size));
  });

  form?.addEventListener('submit', (event) => {
    const original = fileInput?.files?.[0];
    if (isProcessing) {
      event.preventDefault();
      setStatus('Your photo is still being prepared. Give it a moment, then submit again.', 'working');
      return;
    }
    if (original && !preparedPhoto) {
      event.preventDefault();
      setStatus('Please choose the photo again, or use a JPG/PNG if this format could not be prepared.', 'error');
      fileInput?.focus();
      return;
    }
    if (preparedPhoto && preparedPhoto.size > MAX_ORIGINAL) {
      event.preventDefault();
      setStatus('The prepared image is too large. Please choose a smaller photo.', 'error');
    }
  });
})();
