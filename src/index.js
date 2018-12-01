import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext("2d");

let game = new Game(context);

game.board.background.onload = () => {
    game.play();
}


