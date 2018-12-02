import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext("2d");

let game = new Game(context);
let startButton = document.getElementById('start-button');
let newGameButton = document.getElementById('new-game-button');
let startModal = document.getElementById('start-modal');
let lostModal = document.getElementById('lost-modal');

startButton.addEventListener("mousedown", () => {
    game.play();
    game.toggleSound();
    startModal.style.display = "none";
});

newGameButton.addEventListener("mousedown", () => {
    lostModal.style.display = "none";
    game = new Game(context);
    game.play();
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


