import Player from './player.js';
import Enemy from './enemy.js';
import Board from './board.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.enemies = [];
        this.timer = 0;
        this.player = new Player(context);
        this.enemy = new Enemy(context);
        this.board = new Board(context);
        this.play = this.play.bind(this);
    }
    
    play() {
        this.render();
        this.update();
        this.requestAnimFrame()(this.play.bind(this));
    }

    update() {
        this.timer++;
        this.enemies.forEach( (enemy) => {
            enemy.update();
        })
        if (this.timer%50 === 0 ) {
            this.addEnemy();
        }
    }

    render() {
        this.board.draw();
        this.enemies.forEach( (enemy) => {
            enemy.draw();
        });
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.context));
    }

    requestAnimFrame() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 20);
            };
    } 
}
