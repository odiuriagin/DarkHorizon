export default class Board {

    constructor(context) {

        this.context = context;
        this.background = new Image();
        this.background.src = './assets/images/space-bg.png';
        this.size = {x: 800, y: 600};
    }


    draw() {
        this.context.drawImage(this.background, 0, 0, this.size.x, this.size.y);
    }
}

