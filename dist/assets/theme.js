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
      document.querySelector('meta[name="theme-color"]').content = dark ? '#100F0F' : '#FFFFFF';
    };
    button.hidden = false;
    sync();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('floor-theme', root.dataset.theme); } catch {}
      sync();
    });
    const note = document.querySelector('.saying-note');
    if (note) {
      const trigger = note.querySelector('.portrait-saying');
      const tooltip = note.querySelector('.saying-tooltip');
      let hovering = false;
      let pinned = false;
      let keyboardFocus = false;
      const render = () => {
        const open = hovering || pinned || keyboardFocus;
        tooltip.hidden = !open;
        trigger.setAttribute('aria-expanded', String(open));
      };
      const close = () => {
        hovering = pinned = keyboardFocus = false;
        render();
      };
      note.addEventListener('pointerenter', event => {
        if (event.pointerType === 'touch') return;
        hovering = true;
        render();
      });
      note.addEventListener('pointerleave', () => {
        hovering = false;
        render();
      });
      trigger.addEventListener('focus', () => {
        keyboardFocus = trigger.matches(':focus-visible');
        render();
      });
      trigger.addEventListener('blur', close);
      trigger.addEventListener('click', () => {
        pinned = !pinned;
        hovering = keyboardFocus = false;
        render();
      });
      document.addEventListener('pointerdown', event => {
        if (!note.contains(event.target)) close();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') close();
      });
    }
  });
})();
