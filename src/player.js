export default class Player {

    constructor(context) {

        this.context = context;
        this.img = new Image();
        this.img.src = '../assets/images/spaceship.png';
        this.pos = {x: 300, y: 300};
        
    }

    draw() {
        this.context.drawImage(this.img,  this.pos.x,  this.pos.y);
    }
}

