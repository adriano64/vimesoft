const menu = document.getElementById('menu');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') menu.classList.remove('open');
});

document.getElementById('year').textContent = new Date().getFullYear();

// Abre el cliente de correo (sitio estático, sin backend)
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const body = `Nombre: ${d.get('nombre')}\nCorreo: ${d.get('email')}\n\n${d.get('mensaje')}`;
  window.location.href = `mailto:info@vimesoft.com?subject=${encodeURIComponent('Contacto desde el sitio web')}&body=${encodeURIComponent(body)}`;
});
