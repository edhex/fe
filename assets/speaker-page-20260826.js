(() => {
  const capacity = document.querySelector('#consent_capacity');
  const guardian = document.querySelector('#guardianFields');
  const guardianName = document.querySelector('#guardian_name');
  const guardianEmail = document.querySelector('#guardian_email');
  const file = document.querySelector('#profile_photo');
  const preview = document.querySelector('#photoPreview');
  const form = document.querySelector('#speakerForm');

  function syncGuardian(){
    if(!capacity || !guardian) return;
    const needsGuardian = capacity.value === 'under18';
    guardian.classList.toggle('show', needsGuardian);
    guardianName.required = needsGuardian;
    guardianEmail.required = needsGuardian;
  }
  capacity?.addEventListener('change', syncGuardian);
  syncGuardian();

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
      return;
    }
    if(capacity?.value === 'under18' && (!guardianName.value.trim() || !guardianEmail.value.trim())){
      e.preventDefault();
      guardianName.focus();
      alert('Because the contributor is under 18, please add a parent or guardian contact.');
    }
  });
})();
