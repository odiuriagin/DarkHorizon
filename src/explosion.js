export default class Explosion {

    constructor({context, x, y, animx, animy}) {

        this.context = context;
        this.img = new Image();
        this.img.src = '../assets/images/boom3.png';
        this.pos = {x, y, animx, animy};
    }

    draw() {
        this.context.drawImage(this.img, 128*Math.floor(this.pos.animx), 128*Math.floor(this.pos.animy), 128, 128, this.pos.x, this.pos.y, 100, 100);
    }
}

