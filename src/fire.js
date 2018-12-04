export default class Fire {

    constructor({context, x, y, dx, dy}) {

        this.context = context;
        this.img = new Image();
        this.img.src = './assets/images/fire.png';
        this.pos = {x, y, dx, dy};
    }

    draw() {
        this.context.drawImage(this.img, this.pos.x, this.pos.y, 30, 30);
    }

    update() {
        this.pos.x += this.pos.dx;
        this.pos.y += this.pos.dy;
    }
    
}

