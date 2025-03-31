const careerBtns = document.getElementsByClassName('career-btn');
const careerUrl = 'https://open.talentio.com/r/1/c/pocketpair/homes/2647';

function careerLinks( collection, url ) {
  Array.from(collection).forEach( item => {
    item.addEventListener( 'click', function () {
      window.open( url, '_blank' )
    })
  })
}

careerLinks( careerBtns, careerUrl );

