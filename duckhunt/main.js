const distance = 10;
let duckElement = document.getElementById("duck");
let screenWidth = window.innerWidth - 100;
let screenHeight = window.innerHeight - 100;

duckElement.style.left = "600px";
duckElement.style.top = "300px";

let duckX = parseInt(duckElement.style.left);
let duckY = parseInt(duckElement.style.top);
let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
let movements = 20;

function randomNumber() {
  return Math.floor(Math.random() * 8);
}

function doRandom() {
  Fly(directions[randomNumber(0, directions.length)]);
}

function Fly(compass) {
  switch (compass) {
    case "N":
      duckY -= distance;
      break;

    case "NE":
      duckX += distance;
      duckY += distance;
      break;

    case "E":
      duckX += distance;
      break;

    case "SE":
      duckX += distance;
      duckY += distance;
      break;

    case "S":
      duckY += distance;
      break;

    case "SW":
      duckX -= distance;
      duckY += distance;
      break;

    case "W":
      duckX -= distance;
      break;

    case "NW":
      duckX -= distance;
      duckY += distance;
      break;
  }

  if (duckX > screenWidth) {
    duckX = screenWidth;
  }

  if (duckY > screenHeight) {
    duckY = screenHeight;
  }

  if (duckY > screenWidth) {
    duckY = screenWidth;
  }

  if (duckX > screenHeight) {
    duckX = screenHeight;
  }

  duckElement.style.left = duckX + "px";
  duckElement.style.top = duckY + "px";
}

setTimeout(function() {
  setInterval(() => {
    doRandom();
  }, Math.random() * 100);
}, 1000);
