document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.querySelector('.trailers-wrapper');
  const leftButton = document.querySelector('.scroll-left');
  const rightButton = document.querySelector('.scroll-right');

  const scrollAmount = 1000; // Adjust this for how far each click scrolls

  leftButton.addEventListener('click', function () {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', function () {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
