## Dark Horizon

Dark Horizon is a space shooter game coded with vanilla JavaScript and HTML5 Canvas. For this game I have created `Game`, `Board`, `Player`, `Enemy`, `Explosion`, `Fire`, `PlayerFire` and `EnemyFire` classes. `PlayerFire` and `EnemyFire` classes inherit from `Fire` class.

<a href="http://odiuriagin.com/DarkHorizon/">LIVE</a>



![alt text](https://s3.amazonaws.com/realbnb-dev/Dark+Horizon.png "Game")

### **How to Play**

Use mouse to move your spaceship around. Avoid contact with enemy spaceships and enemy bullets as your health will decrease with every collision. Press `SPACE` to shoot. Game difficulty will increase as you kill more enemies. Game will be over when your health is 0.

### **Key Features**

#### Game Control
Player can interact with the game through event listeners. When mouse is moved, player's spaceship coordinates get re-assigned to a new position.

```javascript
 canvas.addEventListener("mousemove", (event) => {
    game.player.pos.x = event.offsetX;
    game.player.pos.y = event.offsetY;
});
```
When player presses `SPACE` button, `shoot()` method gets triggered.
```javascript
document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) game.player.shoot();
});
```

#### Check for collisions

Game checks for player's collision with enemy spaceship and enemy bullets. I defined a method to loop through array of enemies and check if player's coordinates are within enemy coordinates. 

```javascript
    checkForCollision() {
        this.enemies.forEach( (enemy) => {
            if (Math.abs(enemy.pos.x - this.player.pos.x) < 30
                && Math.abs(enemy.pos.y - this.player.pos.y) < 30) {
                this.handleDamage();
            }
        });
    }
```

`handleDamage()` method gets triggered with every collision.

```javascript
    handleDamage() {
        this.damageAudio.play();
        this.health-=10;
        this.displayHealth.style.color = "red";
        this.border.style.border = "3px solid red";
        if (this.health <= 0) {
            this.gameOver();
        }
    }
```

One of the challanges I faced was checking player for collision with bullets of killed enemies. To resolve this, I carried over `EnemyFire` objects from killed enemy to a new `killedEnemyFire` array. 

```javascript
    if (enemy.killed) {
        this.killedEnemyFire = this.killedEnemyFire.concat(enemy.fire);
    }
```

#### Render Explosions

To render explosions, I used 64-frame sprite sheet and updated displayed frame position with every render.

```javascript
    handleExplosion() {
        this.explosions.forEach( (expl, i) => {
            expl.pos.animx = expl.pos.animx + 0.5;
            if (expl.pos.animx > 8) {
                expl.pos.animy++; 
                expl.pos.animx = 0;
            }
            if (expl.pos.animy > 8) {
                this.explosions.splice(i, 1);
            } 
        });
    }
```

#### Levels and difficulty
    
Game levels and difficulty increase with number of killed enemies. To increase difficulty, I decreased time of creating a new enemy in the game, so there are more enemies rendered on the screen. 

```javascript

    updateLevel() {
        if (this.enemyIncrease === 10) return;
        if (this.killedEnemies === this.killsToNextLevel) {
            this.killsToNextLevel += 10;
            this.enemyIncrease -= 10;
            this.level.innerHTML = " " + String(parseInt(this.level.innerHTML) + 1);
        }
    }

```