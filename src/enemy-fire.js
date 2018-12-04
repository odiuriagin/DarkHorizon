import Fire from './fire.js';

export default class EnemyFire extends Fire {

    constructor({context, x, y, dx, dy}) {
        super({context, x, y, dx, dy});
        this.img = new Image();
        this.img.src = './assets/images/enemy-fire.png';
    }

}