const discordImg = document.querySelector('.discord-img')
const xImg = document.querySelector('.x-img')
const ticktokImg = document.querySelector('.ticktok-img');
const youtubeImg = document.querySelector('.youtube-img');

discordImg.addEventListener('click', function() {
  window.open('https://discord.com/invite/pocketpair', '_blank');
});

xImg.addEventListener('click', function () {
  window.open('https://x.com/Palworld_EN', '_blank');
});

ticktokImg.addEventListener('click', function () {
  window.open('https://www.tiktok.com/@palworld_official', '_blank');
});

youtubeImg.addEventListener('click', function () {
  window.open('https://www.youtube.com/@pocketpair', '_blank');
});