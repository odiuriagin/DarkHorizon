import EnemyFire from './enemy-fire.js';

export default class Enemy {

    constructor(context, fireIncrease) {

        this.context = context;
        this.img = new Image();
        this.img.src = './assets/images/fighter.png';
        this.explosion = [];
        this.pos = {x: Math.random()*600,
                    y: -60,
                    dx: Math.random()*2-1,
                    dy: Math.random()*2+2,
                    killed: false,
                };
        this.timer = 0;
        this.fire = [];
        this.fireIncrease = fireIncrease;
        this.fireSound = new Audio();
        this.fireSound.src = './assets/audio/enemy-fire.wav';
        this.shoot = this.shoot.bind(this);
        
    }

    update() {
        this.timer++;
        this.shoot();
        this.pos.x += this.pos.dx;
        this.pos.y += this.pos.dy;
        if (this.pos.x >= 740 || this.pos.x < 0) this.pos.dx = -this.pos.dx;
    }

    draw() {
        this.context.drawImage(this.img,  this.pos.x,  this.pos.y, 60, 60);
        this.fire.forEach( (f, i) => {
            f.draw();
            if (f.pos.y < 0) {
                this.fire.splice(i, 1);
            } else {
                f.update();
            }
        });
    }

    shoot() {
        const xPos = this.pos.x+5;
        const yPos = this.pos.y+50;
        if (this.timer % this.fireIncrease === 0) {
            this.fireSound.play();
            this.fire.push(new EnemyFire({ context: this.context, x: xPos, y: yPos, dx: 0, dy: 5 }))
            this.fire.push(new EnemyFire({ context: this.context, x: xPos, y: yPos, dx: 1, dy: 5 }))
            this.fire.push(new EnemyFire({ context: this.context, x: xPos, y: yPos, dx: -1, dy: 5 }))
        }
    }



}

