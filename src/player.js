export default class Player {

    constructor(context) {

        this.context = context;
        this.spaceshipImg = new Image();
        this.spaceshipImg.src = '../assets/images/spaceship.png';
        this.spaceshipPos = {x: 300, y: 300};
        
    }

    draw() {
        this.context.drawImage(this.spaceshipImg,  this.spaceshipPos.x,  this.spaceshipPos.y);
    }
}

