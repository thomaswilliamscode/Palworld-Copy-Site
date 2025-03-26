document.addEventListener('DOMContentLoaded', function () {
  // Carosel //
  const scrollContainer = document.querySelector('.trailers-wrapper');
  const leftButton = document.querySelector('.scroll-left');
  const rightButton = document.querySelector('.scroll-right');

  // Aniplex //

  const aniplex = document.querySelector('.aniplex-logo');

  // Xbox, Steam, Ps5 buttons //
  const xboxLogos = document.querySelectorAll('.xbox-logo'); 
  const steamLogos = document.querySelectorAll('.steam-logo'); 
  const playstationLogos = document.querySelectorAll('.playstation-logo'); 

  function addClickListener (array, url) {
    array.forEach(item => {
      item.addEventListener('click', function () {
        window.open(url, '_blank')
      })
    })
  }

  // Carosel //

  const scrollAmount = 1000; // Adjust this for how far each click scrolls

  leftButton.addEventListener('click', function () {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', function () {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Aniplex //

  aniplex.addEventListener('click', function () {
    window.open('https://store.aniplexusa.com/palworld/', '_blank');
  });

  // Xbox, Steam, Ps5 buttons event listeners //
  addClickListener( xboxLogos, 'https://www.xbox.com/en-US/games/store/palworld-game-preview/9nkv34xdw014')

  addClickListener( steamLogos, 'https://store.steampowered.com/app/1623730/Palworld/'
  );

  addClickListener( playstationLogos, 'https://store.playstation.com/en-us/product/UP6360-PPSA23126_00-0112788005082769/'
  );
});
