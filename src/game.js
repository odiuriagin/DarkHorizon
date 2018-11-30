import Player from './player.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.enemies = [];
        this.timer = 0;
        this.player = new Player(context);
        this.background = new Image();
        this.background.src = '../assets/images/giphy.gif';
    }
    
    play() {
        console.log("Here");
    }
}
