import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext("2d");

let game = new Game(context);
let myAudio = new Audio();
myAudio.src = './assets/audio/theme.aac';
let muteMusic = true;

game.board.background.onload = () => {
    game.play();
}

canvas.addEventListener("mousemove", (event) => {
    game.player.pos.x = event.offsetX;
    game.player.pos.y = event.offsetY;
});

let mute = document.getElementById('mute');
mute.addEventListener("click", () => toggleSound());

myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false
);

const toggleSound = () => {
    let buttonText = document.getElementById('mute');
    if (muteMusic) {
        myAudio.play();
        muteMusic = false;
        buttonText.innerHTML = "MUTE"
    } else {
        myAudio.pause();
        muteMusic = true;
        buttonText.innerHTML = "PLAY MUSIC"
    }
}

window.game = game;


