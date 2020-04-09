var score = 0;
var scoreDiv = document.getElementById("counter");
// var newCounter = document.querySelector("#counter");

const DISTANCE = 10;
let duckElement = document.getElementById("duck");

duckElement.style.left = "800px";
duckElement.style.top = "50px";

let duckx = parseInt(duckElement.style.left);
let ducky = parseInt(duckElement.style.top);
let screenWidth = window.innerWidth - 10;
let screenHeight = window.innerHeight - 10;

let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

let movements = 20;

function points() {
    if (score < 10){

    
}
    else {

        alert("we shall feast");
        window.location.reload();
    }
    updateScores();
}  
function updateScores() {
    scoreDiv.innerHTML = score;
  
}

function newDuck(element) {
    moveElementRandomly(duckElement);

}

function moveElementRandomly(element) {
    element.style.position = "absolute";
    element.style.left = Math.floor(Math.random(screenWidth) * 2 ) + "px";
    element.style.top = Math.floor(Math.random(screenHeight) * 2 ) + "px";
}

function randomNumber() {
    return Math.floor(Math.random() * directions.length);
}


function doRandom() {
    fly(directions[randomNumber(0, directions.length)]);
}

function fly(compass) {

switch (compass) {
    case 'N':
        ducky -= DISTANCE;
        break;

        case 'NE':
            duckx += DISTANCE;
            ducky += DISTANCE;
            break;

        case 'E':
            duckx += DISTANCE;
        break;

        case 'SE':
            duckx += DISTANCE;
            ducky += DISTANCE;
        break;

        case 'S':
            ducky += DISTANCE;
        break;

        case 'SW':
            duckx -= DISTANCE;
            ducky -= DISTANCE;
        break;

        case 'W':
            duckx -= DISTANCE;
        break;

        case 'NW':
            duckx -= DISTANCE;
            ducky -= DISTANCE;
         break;
}

if (duckx > screenWidth) {
    duckx = screenWidth;
  }

  if (ducky > screenHeight) {
    ducky = screenHeight;
  }
  if (duckx < 0) {
      duckx = 0;
  }
  if (ducky < 0) {
      ducky = 0;
  }

duckElement.style.left = duckx + "px";
duckElement.style.top = ducky + "px";

}

setTimeout(function() {
    setInterval(() => {
    doRandom();
}, Math.random() * 100);
}, 100);

function handleDuckClick(duck) {
    score++;
    duckElement.style.display = "none";



setTimeout(function() {
    doRandom();
    newDuck();
    duckElement.style.display = "block";
}, 1000);

points();

}