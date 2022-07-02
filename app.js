const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
  navOverlay.classList.toggle('hide');
});
