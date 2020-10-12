// Game setup
let game = new Game();

document.getElementById("begin-game").addEventListener("click", function () {
  game.start();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

// Listen for keyboard presses
document.addEventListener('keydown', function(event) {
    game.handleKeydown(event)
})
