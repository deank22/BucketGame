import { goldcoinImage } from './image';
import { greenbucketImage } from './image2';
import './image';
import './image2';

let app = document.querySelector('#app');
let canvas = document.createElement('canvas');
app.appendChild(canvas);
let ctx = canvas.getContext("2d");
let y = 0;
let score = 1;

let goldcoin = {
  x:430,
  y:10,
};

let greenbucket = {
  x:10,
  y:420,
};

//creates the canvas and outline of it
canvas.width=500;
canvas.height=500;
canvas.style.width='500px';
canvas.style.height='500px';
canvas.style.border='5px solid pink'


function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "18pt Futura";
  ctx.fillStyle = "solid pink";
  ctx.fillText(`Score: ${score}`, 50, 50);
  //requestAnimationFrame(animate)
  goldcoin.y += score;
  if (goldcoin.y > canvas.height) {
   goldcoin.y = 0;
    goldcoin.x = Math.random()*420
  }
  if (goldcoin.y > greenbucket.y
     && goldcoin.y < (greenbucket.y+score+1)     
     ) {
    let distance = Math.abs(goldcoin.x-greenbucket.x);
    if (distance < 45){
      console.log('hit!');
      score += 1;
    }
  }
 
  drawGoldcoin()
  drawGreenbucket()
  requestAnimationFrame(animate)
}
animate();


function drawGoldcoin () { 
  let ctx = canvas.getContext('2d');
  ctx.resetTransform();
  //ctx.fillRect(10, y, 50, 50);
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    goldcoinImage, 
    goldcoin.x, 
    goldcoin.y, 
    80, 
    70
  );
}

function drawGreenbucket () {
  let ctx = canvas.getContext('2d');
  ctx.resetTransform();
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    greenbucketImage,
    greenbucket.x,
    greenbucket.y,
    90,
    80
  );
}

canvas.addEventListener(
  "mousemove",
  function(event) {
      greenbucket.x=event.offsetX-45
      //greenbucket.y=event.offsetY
  }
);

