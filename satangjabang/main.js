var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4600);
}

function videoChoice() {
    var drpVideoChoices = document.getElementById("drpVideoChoices");
    var player = document.getElementById("player");
    var selected = drpVideoChoices.value;
    var available = [
      "vid1.mp4",
      "vid2.mp4"
    ];
    player.src = available[selected];
    player.play();
  }