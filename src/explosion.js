export default class Explosion {

    constructor({context, x, y, animx, animy}) {

        this.context = context;
        this.img = new Image();
        this.img.src = './assets/images/tile.png';
        this.pos = {x, y, animx, animy};
    }

    draw() {
        this.context.drawImage(this.img, 256*Math.floor(this.pos.animx), 256*Math.floor(this.pos.animy), 256, 256, this.pos.x, this.pos.y, 100, 100);
    }
}

