var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/clap.mp3");
      tom1.play();
      break;

    case "w":
      var tom1 = new Audio("sounds/hithat.mp3");
      
      tom1.play();
      break;

    case "e":
      var tom1 = new Audio("sounds/kick.mp3");
      tom1.play();
      break;  

    case "r":
      var tom1 = new Audio("sounds/openhat.mp3");
      tom1.play();
      break;  

    case "t":
      var tom1 = new Audio("sounds/boom.mp3");
      tom1.play();
      break;
    
    case "y":
      var tom1 = new Audio("sounds/ride.mp3");
      tom1.play();
      break;
    
    case "u":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
      
    case "i":
      var tom1 = new Audio("sounds/tom.mp3");
      tom1.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}