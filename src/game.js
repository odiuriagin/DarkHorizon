import Player from './player.js';
import Enemy from './enemy.js';
import Board from './board.js';
import Explosion from './explosion.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.enemies = [];
        this.explosions = [];
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
        this.checkIfEnemyKilled();
        this.handleExplosion();
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
        this.player.shoot();
    }

    render() {
        this.board.draw();
        this.enemies.forEach( (enemy) => {
            enemy.draw();
        });
        this.player.draw();
        this.explosions.forEach ( (expl) => {
            expl.draw();
        })
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.context));
    }

    checkIfEnemyKilled() {
        this.enemies.forEach( (enemy, i) => {
            this.player.fire.forEach( (f, j) => {
                if (Math.abs(enemy.pos.x+30 - f.pos.x-15) < 60 
                && Math.abs(enemy.pos.y-f.pos.y)<30) {
                    enemy.killed = true;
                    this.player.fire.splice(j, 1);
                }  
            });
            if (enemy.killed) {
                this.explosions.push(new Explosion({
                    context: this.context,
                    x: enemy.pos.x,
                    y: enemy.pos.y,
                    animx: 0,
                    animy: 0,
                }))
                this.enemies.splice(i, 1);
            }
        });
    }

    handleExplosion() {
        this.explosions.forEach( (expl, i) => {
            expl.pos.animx = expl.pos.animx + 2;
            if (expl.pos.animx > 8) {
                expl.pos.animy++; 
                expl.pos.animx = 0;
            }
            if (expl.pos.animy > 8) {
                this.explosions.splice(i, 1);
            } 
        });
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
