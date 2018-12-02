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
        this.killed = false;
        this.health = 1000;
        this.score = document.getElementById('score');
        this.score.innerHTML = "000000";
        this.player = new Player(context);
        this.board = new Board(context);
        this.play = this.play.bind(this);
        this.myAudio = new Audio();
        this.myAudio.src = './assets/audio/theme.aac';
        this.muteMusic = true;
        this.toggleSound = this.toggleSound.bind(this);
    }
    
    play() {
        this.render();
        this.update();
        this.requestAnimFrame()(this.play.bind(this));
    }

    update() {
        this.timer++;
        this.handleDamage();
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
                this.updateScore();
            }
        });
    }

    handleExplosion() {
        this.explosions.forEach( (expl, i) => {
            expl.pos.animx = expl.pos.animx + 0.5;
            if (expl.pos.animx > 8) {
                expl.pos.animy++; 
                expl.pos.animx = 0;
            }
            if (expl.pos.animy > 8) {
                this.explosions.splice(i, 1);
            } 
        });
    }

    updateScore() {
        let newScore;
        let scoreZeros = 6 - String(parseInt(this.score.innerHTML)).length;
        scoreZeros = "0".repeat(scoreZeros);
        newScore = scoreZeros + String(parseInt(this.score.innerHTML) + 10);
        if (newScore.length > 6) newScore = newScore.slice(1);
        this.score.innerHTML = newScore;
    }

    toggleSound() {
        let buttonText = document.getElementById('mute');
        if (this.muteMusic) {
            this.myAudio.play();
            this.muteMusic = false;
            buttonText.innerHTML = "MUTE"
        } else {
            this.myAudio.pause();
            this.muteMusic = true;
            buttonText.innerHTML = "PLAY MUSIC"
        }
    }

    handleDamage() {
        let displayHealth = document.getElementById('health');
        let border = document.getElementById('game')
        displayHealth.innerHTML = this.health;
        displayHealth.style.color = "white";
        border.style.border = "3px solid black";
        this.enemies.forEach( (enemy, i) => {
            if ((Math.abs(enemy.pos.x - this.player.pos.x) < 30)
                && (Math.abs(enemy.pos.y - this.player.pos.y)) < 30) {
                    this.health-=10;
                    displayHealth.style.color = "red";
                    border.style.border = "3px solid red";
                }
            if (this.health <= 0) {
                this.gameOver();
            }
        });
    }

    gameOver() {
        alert("GAME OVER");
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
