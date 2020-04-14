// Function for the (arrow key down) when being onclicked it will go to the div with id projects.
function scrollToProject() {
  var project = document.getElementById("projects");
  project.scrollIntoView({ behavior: "smooth" });
}

// Typewriting.
var messages = ["I am Junyi Xie.","I am a Student.","I am a Front-End Developer."];
var rank = 0;

// Code for Chrome, Safari and Opera
document.getElementById("typewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("typewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  h1 = this.getElementsByTagName("h1")[0];
  h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      h1.innerHTML = messages[rank];
      var speed = 2.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      h1.style.webkitAnimation = 'typing '+speed+'s steps(20, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}

// Onclick adds mailto.
function mail(){
  location.href='mailto:yunyi.xie@outlook.com';
}
