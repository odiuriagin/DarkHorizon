import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext("2d");

let game = new Game(context);
let startButton = document.getElementById('new-game-button');
let modal = document.getElementById('modal');

startButton.addEventListener("mousedown", () => {
    game.play();
    game.toggleSound();
    modal.style.display = "none";
});

canvas.addEventListener("mousemove", (event) => {
    game.player.pos.x = event.offsetX;
    game.player.pos.y = event.offsetY;
});

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) game.player.shoot();
});

let mute = document.getElementById('mute');
mute.addEventListener("mousedown", () => {
    game.toggleSound();
});

game.myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false
);



window.game = game;


