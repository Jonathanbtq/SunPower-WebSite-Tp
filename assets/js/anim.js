const box = document.querySelector("#box");
const div = document.querySelector('.ctn_box');
let frameRate = 60;
let distance = 2.2;
let int;
let max = 5;

function animate() {
    wdt = div.offsetWidth;
    console.log(wdt);
    var margin = 0;
    int = setInterval(function() {
      margin = (margin > wdt ? 0 : margin + Number(distance));
      box.style.marginLeft = margin + "px";
    },
    1000 / Number(frameRate))
}

animate();

function reset() {
  clearInterval(int);
  animate();
}