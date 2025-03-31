const comingSoon = document.querySelector('.coming-soon');
const pitchYourGameArray = document.querySelectorAll('.pitch-your-game');
const pitchYourGameURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeOLO5UXeNBA-xqFNscz7ZuNTfbkp3gOzHU-ztWthijY4w9HA/viewform';

comingSoon.addEventListener('click', function () {
  window.open('https://www.surgentstudios.com/', '_blank');
});

function addClickEvent( array, url ) {
  array.forEach( item => {
    item.addEventListener( 'click', function () {
      window.open( url, '_blank' )
    } )
  })
};

addClickEvent( pitchYourGameArray, pitchYourGameURL )

