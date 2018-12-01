import Player from './player.js';
import Enemy from './enemy.js';
import Board from './board.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.enemies = [];
        this.timer = 0;
        this.player = new Player(context);
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
        this.enemies.forEach( (enemy, i) => {
            if (enemy.pos.y > 600) {
                this.enemies.splice(i,1)
            } else {
                enemy.update();
            }
        });
        if (this.timer%120 === 0 ) {
            this.addEnemy();
        }
    }

    render() {
        this.board.draw();
        this.enemies.forEach( (enemy) => {
            enemy.draw();
        });
        this.player.draw();
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
