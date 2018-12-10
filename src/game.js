import Player from './player.js';
import Enemy from './enemy.js';
import Board from './board.js';
import Explosion from './explosion.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.enemies = [];
        this.explosions = [];
        this.ammo = [];
        this.timer = 0;
        this.killed = false;
        this.health = 1000;
        this.score = document.getElementById('score');
        this.score.innerHTML = "000000";
        this.lostScore = document.getElementById('lost-score');
        this.level = document.getElementById('level');
        this.level.innerHTML = "1";
        this.killedNum = document.getElementById('killed');
        this.killedNum.innerHTML = "0";
        this.lostEnemiesKilled = document.getElementById('lost-killed-enemies');
        this.fireIncrease = 60;
        this.player = new Player(context);
        this.board = new Board(context);
        this.play = this.play.bind(this);
        this.killedEnemyFire = [];
        this.killedEnemies = 0;
        this.killsToNextLevel = 10;
        this.enemyIncrease = 120;
        this.myAudio = new Audio();
        this.myAudio.src = './assets/audio/theme.aac';
        this.explosionAudio = new Audio();
        this.explosionAudio.src = './assets/audio/explosion.wav';
        this.damageAudio = new Audio();
        this.damageAudio.src = './assets/audio/damage.wav';
        this.muteMusic = true;
        this.toggleSound = this.toggleSound.bind(this);
        this.lostModal = document.getElementById('lost-modal');
        this.displayHealth = document.getElementById('health');
        this.displayHealth.innerHTML = this.health;
        this.border = document.getElementById('game');
    }
     
    play() {
        this.render();
        this.update();
        if (!this.killed) {
            this.requestAnimFrame()(this.play.bind(this));
        } else {
            this.lostModal.classList.add("modal");
            this.lostModal.style.display = "block";
            this.lostScore.innerHTML = this.score.innerHTML; 
            this.lostEnemiesKilled.innerHTML = this.killedNum.innerHTML; 
        }
    }

    update() {
        this.timer++;
        this.clearDisplayDamage();
        this.checkForCollision();
        this.checkIfEnemyHitPlayer();
        this.checkIfEnemyKilled();

        this.handleExplosion();
        this.updateLevel();
        this.enemies.forEach( (enemy, i) => {
            if (enemy.pos.y > 600) {
                this.enemies.splice(i,1)
            } else {
                enemy.update();
            }
        });
        this.killedEnemyFire.forEach( (f) => {
            f.update();
        });
        if (this.timer%this.enemyIncrease === 0 ) {
            this.addEnemy();
        }
    }

    render() {
        this.board.draw();
        this.enemies.forEach( (enemy) => {
            enemy.draw();
        });
        this.player.draw();
        this.killedEnemyFire.forEach( (f) => {
            f.draw();
        });
        this.explosions.forEach ( (expl) => {
            expl.draw();
        })
        this.ammo.forEach( (a) => {
            a.draw();
        })
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.context, this.fireIncrease));
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
                this.killedEnemies++;
                this.explosions.push(new Explosion({ context: this.context, x: enemy.pos.x, y: enemy.pos.y, animx: 0, animy: 0, }))
                this.killedEnemyFire = this.killedEnemyFire.concat(enemy.fire);
                this.enemies.splice(i, 1);
                this.updateScore();
                this.updateKilledNum();
                this.explosionAudio.play();
            }
        });
    }

    checkIfEnemyHitPlayer() {
        this.enemies.forEach( (enemy) => {
            enemy.fire.forEach( (f) => {
                if (Math.abs(f.pos.x - this.player.pos.x) < 30
                    && Math.abs(f.pos.y - this.player.pos.y) < 30) {
                        this.handleDamage();
                    }
            })
        });
        this.killedEnemyFire.forEach ( (f) => {
            if (Math.abs(f.pos.x - this.player.pos.x) < 30
            && Math.abs(f.pos.y - this.player.pos.y) < 30) {
                this.handleDamage();
            }
        })
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

    updateLevel() {
        if (this.enemyIncrease === 10) return;
        if (this.killedEnemies === this.killsToNextLevel) {
            this.killsToNextLevel += 10;
            this.enemyIncrease -= 10;
            this.fireIncrease -= 5;
            this.level.innerHTML = " " + String(parseInt(this.level.innerHTML) + 1);
        }
    }

    updateKilledNum() {
        this.killedNum.innerHTML = " " + String(parseInt(this.killedNum.innerHTML) + 1);
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

    clearDisplayDamage() {
        this.displayHealth.innerHTML = this.health;
        this.displayHealth.style.color = "white";
        this.border.style.border = "3px solid black";
    }

    handleDamage() {
        this.damageAudio.play();
        this.health-=10;
        this.displayHealth.style.color = "red";
        this.border.style.border = "3px solid red";
        if (this.health <= 0) {
            this.gameOver();
        }
    }

    checkForCollision() {
        this.enemies.forEach( (enemy, i) => {
            if (Math.abs(enemy.pos.x - this.player.pos.x) < 30
                && Math.abs(enemy.pos.y - this.player.pos.y) < 30) {
                this.handleDamage();
            }
        });
    }

    gameOver() {
        this.killed = true;
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
