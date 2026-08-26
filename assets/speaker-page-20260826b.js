(() => {
  const file = document.querySelector('#profile_photo');
  const preview = document.querySelector('#photoPreview');
  const form = document.querySelector('#speakerForm');

  file?.addEventListener('change', () => {
    const f = file.files && file.files[0];
    if(!f){ preview.innerHTML = '+'; return; }
    if(f.size > 9 * 1024 * 1024){
      alert('Please choose an image under 9 MB.');
      file.value = '';
      preview.innerHTML = '+';
      return;
    }
    const reader = new FileReader();
    reader.onload = e => preview.innerHTML = `<img src="${e.target.result}" alt="Photo preview">`;
    reader.readAsDataURL(f);
  });

  form?.addEventListener('submit', (e) => {
    const f = file?.files?.[0];
    if(f && f.size > 9 * 1024 * 1024){
      e.preventDefault();
      alert('Please choose an image under 9 MB before submitting.');
    }
  });
})();
