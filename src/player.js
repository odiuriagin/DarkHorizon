import PlayerFire from './player-fire.js';

export default class Player {

    constructor(context) {

        this.context = context;
        this.img = new Image();
        this.img.src = './assets/images/spaceship.png';
        this.timer = 0;
        this.pos = {x: 300, y: 300};
        this.fire = [];
        this.fireSound = new Audio();
        this.fireSound.src = './assets/audio/fire.wav';
        this.shoot = this.shoot.bind(this);
    }

    draw() {
        this.timer++;
        this.context.drawImage(this.img, this.pos.x, this.pos.y);
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
        this.fireSound.play();
        this.fire.push(new PlayerFire({
            context: this.context,
            x: this.pos.x+10,
            y: this.pos.y,
            dx: 0,
            dy: -5.2,
        }))
    }
}

