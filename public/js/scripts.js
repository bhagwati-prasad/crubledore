const btn = document.getElementById('hamburger');
const overlay = document.getElementById('siteNav');
let isOpen = false;

btn.addEventListener('click', () => {
  isOpen = !isOpen;
  overlay.classList.toggle('open', isOpen);
  btn.classList.toggle('open', isOpen);
});

overlay.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    isOpen = false;
    overlay.classList.remove('open');
    btn.classList.remove('open');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen) {
    isOpen = false;
    overlay.classList.remove('open');
    btn.classList.remove('open');
  }
});