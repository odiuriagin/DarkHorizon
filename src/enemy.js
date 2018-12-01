export default class Enemy {

    constructor(context) {

        this.context = context;
        this.img = new Image();
        this.img.src = '../assets/images/fighter.png';
        this.pos = {x: 0, y: 300, dx: 4, dy: 5};
        
    }

    update() {
        this.pos.x += this.pos.dx;
        this.pos.y += this.pos.dy;
        if (this.pos.x >= 540 || this.pos.x < 0) this.pos.dx = -this.pos.dx;
        if (this.pos.y >= 540 || this.pos.y < 0) this.pos.dy = -this.pos.dy;
    }

    draw() {
        this.context.drawImage(this.img,  this.pos.x,  this.pos.y, 60, 60);
    }
}

