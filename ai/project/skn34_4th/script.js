const viewer = document.querySelector('.image-viewer');
const viewerImage = viewer.querySelector('img');
const viewerTitle = viewer.querySelector('#viewer-title');
const original = viewer.querySelector('.viewer-original');
let previousOverflow = '';
document.querySelectorAll('.zoom-image').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    const image = link.querySelector('img');
    viewerImage.src = link.href;
    viewerImage.alt = image.alt;
    viewerTitle.textContent = image.alt;
    original.href = link.href;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    viewer.showModal();
  });
});
viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const rect = viewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
});
viewer.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
