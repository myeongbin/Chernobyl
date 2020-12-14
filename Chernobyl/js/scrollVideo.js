// var FRAMES = 300;
// var FPS = 30;
// var video = document.querySelector('.main-video');

// window.addEventListener('scroll', function (e) {
//   var time = (window.scrollY / 100) * FRAMES / FPS;
//   video.currentTime = time;
//   console.log(time);
// });

// window.addEventListener('load', function(e) {
//   video.pause();
//   video.currentTime = 0;
// });

let scrollItem = document.querySelector('.cs-chart');

window.addEventListener('scroll', scrollMain);

function scrollMain(e){
  let value = window.scrollY;
  scrollItem.style.backgroundSize = 100 + value + "px";
}