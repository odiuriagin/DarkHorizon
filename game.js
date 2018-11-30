let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let enemies = [];
let timer = 0;
let spaceship = {x: 300, y: 300};

const enemy = new Image();
enemy.src = 'fighter.png'; 

const spaceshipImg = new Image();
spaceshipImg.src = 'spaceship.png';

const background = new Image();
background.src = 'giphy.gif';

canvas.addEventListener("mousemove", (event) {
    spaceship.x = event.offsetX-25;
    spaceship.y = event.offsetY-13;
});


background.onload = () => {
    game();
}

game = () => {
    update();
    render();
    requestAnimFrame(game);
}

update = () => {

    timer++;

    if (timer%50 === 0) {
        enemies.push({x: Math.random()*600, y: -60, dx: Math.random()*2-1, dy: Math.random()*2+2});
    }

    for (i in enemies) {
        enemies[i].x += enemies[i].dx;
        enemies[i].y += enemies[i].dy;
        if (enemies[i].x >= 540 || enemies[i].x < 0) enemies[i].dx = -enemies[i].dx;
        if (enemies[i].y > 600) enemies.slice(i,1);
    }
}

render = () => {
    context.drawImage(background, 0, 0, 600, 600);
    context.drawImage(spaceshipImg, spaceship.x, spaceship.y);
    for (i in enemies) context.drawImage(enemy, enemies[i].x, enemies[i].y, 60, 60);
}

const requestAnimFrame = ( () => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 20);
        };
})();