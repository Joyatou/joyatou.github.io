(function(){
  const btn = document.getElementById('menubtn');
  const overlay = document.getElementById('menu-overlay');
  if (!btn || !overlay) return;
  const close = () => { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded','false'); overlay.setAttribute('aria-hidden','true'); };
  const open  = () => { document.body.classList.add('menu-open');    btn.setAttribute('aria-expanded','true');  overlay.setAttribute('aria-hidden','false'); };
  btn.addEventListener('click', () => { document.body.classList.contains('menu-open') ? close() : open(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
