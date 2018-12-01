export default class Enemy {

    constructor(context) {

        this.context = context;
        this.img = new Image();
        this.img.src = '../assets/images/fighter.png';
        this.explosion = [];
        this.pos = {x: Math.random()*600,
                    y: -60,
                    dx: Math.random()*2-1,
                    dy: Math.random()*2+2,
                    killed: false,
                };
        
    }

    update() {
        this.pos.x += this.pos.dx;
        this.pos.y += this.pos.dy;
        if (this.pos.x >= 740 || this.pos.x < 0) this.pos.dx = -this.pos.dx;
    }

    draw() {
        this.context.drawImage(this.img,  this.pos.x,  this.pos.y, 60, 60);
    }

    explode() {

    }
}

