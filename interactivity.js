let OFFSET_VAL = .01;

let getCurrentJSImage = function (){
      return document.querySelector(".card.active div.js-image");
}

let currentImage = getCurrentJSImage();
let deltaX = 0;
let deltaY = 0;
document.addEventListener("mousemove", function(ev) {
      deltaX = ev.clientX - currentImage.parentElement.offsetLeft;
      deltaY = ev.clientY - currentImage.parentElement.offsetTop;
      currentImage.style.backgroundPositionX = `calc(50% ${deltaX > 0 ? "-" : "+"} ${Math.ceil(Math.abs(deltaX*OFFSET_VAL))}px)`;
      currentImage.style.backgroundPositionY = `calc(50% ${deltaY > 0 ? "-" : "+"} ${Math.ceil(Math.abs(deltaY*OFFSET_VAL))}px)`;
});