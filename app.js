(function () {
  const screens = {
    settings: document.getElementById('screen-settings'),
    preferences: document.getElementById('screen-preferences'),
  };

  function showScreen(name) {
    Object.values(screens).forEach((screen) => screen.classList.remove('active'));
    if (screens[name]) {
      screens[name].classList.add('active');
    }
  }

  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => {
      showScreen(el.dataset.nav);
    });
  });

  document.querySelector('.btn-logout').addEventListener('click', () => {
    if (confirm('Are you sure you want to log out?')) {
      alert('Logged out');
    }
  });

  document.querySelectorAll('.row:not(.row-toggle):not(.row-toggle-compact)').forEach((row) => {
    if (row.dataset.nav) return;
    row.addEventListener('click', () => {
      const label = row.querySelector('.row-label')?.textContent?.trim();
      if (label && label !== 'Language') {
        console.log(`Navigate to: ${label}`);
      }
    });
  });

  document.querySelector('#screen-preferences .row').addEventListener('click', () => {
    console.log('Navigate to: Language selection');
  });

  ['toggle-iq', 'toggle-sounds', 'toggle-vibrations'].forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('change', () => {
      console.log(`${id}: ${input.checked ? 'on' : 'off'}`);
    });
  });
})();
