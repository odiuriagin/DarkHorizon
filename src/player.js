import Fire from './fire.js';

export default class Player {

    constructor(context) {

        this.context = context;
        this.img = new Image();
        this.img.src = '../assets/images/spaceship.png';
        this.timer = 0;
        this.pos = {x: 300, y: 300};
        this.fire = [];
    }

    draw() {
        this.timer++;
        this.shoot();
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
        if (this.timer%30 === 0) {
            this.fire.push(new Fire({
                context: this.context,
                x: this.pos.x+10,
                y: this.pos.y,
                dx: 0,
                dy: -5.2,
            }))
        }
    }
}

