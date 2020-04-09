var obj = null;
var score = 0;

function init() {
  moveBananaX();
  obj = document.getElementById("dk");
  obj.style.left = "0px";
  obj.style.bottom = "20px";
}

function moveBananaX() {
  var x = Math.floor(Math.random() * 359 + 1);
  document.getElementById("banana").style.top = x + "px";
  return x;
}

function moveBananaY() {
  var y = Math.floor(Math.random() * 1279 + 1);
  document.getElementById("banana").style.left = y + "px";
  return y;
}

function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();

  return (
    elm1Rect.right >= elm2Rect.left &&
    elm1Rect.left <= elm2Rect.right &&
    elm1Rect.bottom >= elm2Rect.top &&
    elm1Rect.top <= elm2Rect.bottom
  );
}

function movedk(evt) {
  var dk = document.getElementById("dk");
  var banana = document.getElementById("banana");
  var scoreDiv = document.getElementById("score");

  switch (evt.keyCode) {
    case 65:
      stepsLeft();
      break;
    case 68:
      stepsRight();
      break;
    case 32:
      Jump();
      break;
  }

  function stepsLeft() {
    obj.style.left = parseInt(obj.style.left) - 10 + "px";
    obj.style.webkitTransform = "rotateY(180deg)";
  }

  function stepsRight() {
    obj.style.left = parseInt(obj.style.left) + 10 + "px";
    obj.style.webkitTransform = "rotateY(360deg)";
  }

  function Jump() {
    var dk = $("#dk");
    dk.animate({ bottom: "500px" }, "slow");
    dk.animate({ bottom: "20px" }, "slow");
  }

  setTimeout(function() {
    if (checkCollision(banana, dk)) {
      scoreDiv.innerHTML = ++score;
      moveBananaX();
      moveBananaY();
      if (score == 10) {
        alert("Game Over");
        window.location.reload();
      }
    }
  }, 0.1);
}

window.addEventListener("keydown", movedk);

window.onload = init;
