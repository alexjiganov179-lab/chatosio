document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('preloader');
  const percentElem = loader?.querySelector('.percent');
  if (!loader || !percentElem) return;

  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    percentElem.textContent = `${percent}%`;
    if (percent >= 100) {
      clearInterval(interval);
      loader.classList.add('fadeout');
      setTimeout(() => loader.remove(), 500);
    }
  }, 3000 / 100);
});
