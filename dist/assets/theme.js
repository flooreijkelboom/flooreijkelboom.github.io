(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem('floor-theme'); } catch {}
  // Paper is the primary presentation; remember an explicit reader preference.
  root.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const sync = () => {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
      button.title = button.getAttribute('aria-label');
      document.querySelector('meta[name="theme-color"]').content = dark ? '#100F0F' : '#FFFCF0';
    };
    button.hidden = false;
    sync();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('floor-theme', root.dataset.theme); } catch {}
      sync();
    });
  });
})();
