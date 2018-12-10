/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\nclass Board {\n\n    constructor(context) {\n\n        this.context = context;\n        this.background = new Image();\n        this.background.src = './assets/images/space-bg.png';\n        this.size = {x: 800, y: 600};\n    }\n\n\n    draw() {\n        this.context.drawImage(this.background, 0, 0, this.size.x, this.size.y);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/enemy-fire.js":
/*!***************************!*\
  !*** ./src/enemy-fire.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EnemyFire; });\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire.js */ \"./src/fire.js\");\n\n\nclass EnemyFire extends _fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor({context, x, y, dx, dy}) {\n        super({context, x, y, dx, dy});\n        this.img = new Image();\n        this.img.src = './assets/images/enemy-fire.png';\n    }\n\n}\n\n//# sourceURL=webpack:///./src/enemy-fire.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _enemy_fire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy-fire.js */ \"./src/enemy-fire.js\");\n\n\nclass Enemy {\n\n    constructor(context, fireIncrease) {\n\n        this.context = context;\n        this.img = new Image();\n        this.img.src = './assets/images/fighter.png';\n        this.explosion = [];\n        this.pos = {x: Math.random()*600,\n                    y: -60,\n                    dx: Math.random()*2-1,\n                    dy: Math.random()*2+2,\n                    killed: false,\n                };\n        this.timer = 0;\n        this.fire = [];\n        this.fireIncrease = fireIncrease;\n        this.fireSound = new Audio();\n        this.fireSound.src = './assets/audio/enemy-fire.wav';\n        this.shoot = this.shoot.bind(this);\n        \n    }\n\n    update() {\n        this.timer++;\n        this.shoot();\n        this.pos.x += this.pos.dx;\n        this.pos.y += this.pos.dy;\n        if (this.pos.x >= 740 || this.pos.x < 0) this.pos.dx = -this.pos.dx;\n    }\n\n    draw() {\n        this.context.drawImage(this.img,  this.pos.x,  this.pos.y, 60, 60);\n        this.fire.forEach( (f, i) => {\n            f.draw();\n            if (f.pos.y < 0) {\n                this.fire.splice(i, 1);\n            } else {\n                f.update();\n            }\n        });\n    }\n\n    shoot() {\n        const xPos = this.pos.x+5;\n        const yPos = this.pos.y+50;\n        if (this.timer % this.fireIncrease === 0) {\n            this.fireSound.play();\n            this.fire.push(new _enemy_fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ context: this.context, x: xPos, y: yPos, dx: 0, dy: 5 }))\n            this.fire.push(new _enemy_fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ context: this.context, x: xPos, y: yPos, dx: 1, dy: 5 }))\n            this.fire.push(new _enemy_fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ context: this.context, x: xPos, y: yPos, dx: -1, dy: 5 }))\n        }\n    }\n\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Explosion; });\nclass Explosion {\n\n    constructor({context, x, y, animx, animy}) {\n\n        this.context = context;\n        this.img = new Image();\n        this.img.src = './assets/images/tile.png';\n        this.pos = {x, y, animx, animy};\n    }\n\n    draw() {\n        this.context.drawImage(this.img, 256*Math.floor(this.pos.animx), 256*Math.floor(this.pos.animy), 256, 256, this.pos.x, this.pos.y, 100, 100);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/fire.js":
/*!*********************!*\
  !*** ./src/fire.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fire; });\nclass Fire {\n\n    constructor({context, x, y, dx, dy}) {\n\n        this.context = context;\n        this.img = new Image();\n        this.img.src = './assets/images/fire.png';\n        this.pos = {x, y, dx, dy};\n    }\n\n    draw() {\n        this.context.drawImage(this.img, this.pos.x, this.pos.y, 30, 30);\n    }\n\n    update() {\n        this.pos.x += this.pos.dx;\n        this.pos.y += this.pos.dy;\n    }\n    \n}\n\n\n\n//# sourceURL=webpack:///./src/fire.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n/* harmony import */ var _explosion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explosion.js */ \"./src/explosion.js\");\n\n\n\n\n\nclass Game {\n\n    constructor(context) {\n        this.context = context;\n        this.enemies = [];\n        this.explosions = [];\n        this.ammo = [];\n        this.timer = 0;\n        this.killed = false;\n        this.health = 1000;\n        this.score = document.getElementById('score');\n        this.score.innerHTML = \"000000\";\n        this.lostScore = document.getElementById('lost-score');\n        this.level = document.getElementById('level');\n        this.level.innerHTML = \"1\";\n        this.killedNum = document.getElementById('killed');\n        this.killedNum.innerHTML = \"0\";\n        this.lostEnemiesKilled = document.getElementById('lost-killed-enemies');\n        this.fireIncrease = 60;\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context);\n        this.play = this.play.bind(this);\n        this.killedEnemyFire = [];\n        this.killedEnemies = 0;\n        this.killsToNextLevel = 10;\n        this.enemyIncrease = 120;\n        this.myAudio = new Audio();\n        this.myAudio.src = './assets/audio/theme.aac';\n        this.explosionAudio = new Audio();\n        this.explosionAudio.src = './assets/audio/explosion.wav';\n        this.damageAudio = new Audio();\n        this.damageAudio.src = './assets/audio/damage.wav';\n        this.muteMusic = true;\n        this.toggleSound = this.toggleSound.bind(this);\n        this.lostModal = document.getElementById('lost-modal');\n        this.displayHealth = document.getElementById('health');\n        this.displayHealth.innerHTML = this.health;\n        this.border = document.getElementById('game');\n    }\n     \n    play() {\n        this.render();\n        this.update();\n        if (!this.killed) {\n            this.requestAnimFrame()(this.play.bind(this));\n        } else {\n            this.lostModal.classList.add(\"modal\");\n            this.lostModal.style.display = \"block\";\n            this.lostScore.innerHTML = this.score.innerHTML; \n            this.lostEnemiesKilled.innerHTML = this.killedNum.innerHTML; \n        }\n    }\n\n    update() {\n        this.timer++;\n        this.clearDisplayDamage();\n        this.checkForCollision();\n        this.checkIfEnemyHitPlayer();\n        this.checkIfEnemyKilled();\n\n        this.handleExplosion();\n        this.updateLevel();\n        this.enemies.forEach( (enemy, i) => {\n            if (enemy.pos.y > 600) {\n                this.enemies.splice(i,1)\n            } else {\n                enemy.update();\n            }\n        });\n        this.killedEnemyFire.forEach( (f) => {\n            f.update();\n        });\n        if (this.timer%this.enemyIncrease === 0 ) {\n            this.addEnemy();\n        }\n    }\n\n    render() {\n        this.board.draw();\n        this.enemies.forEach( (enemy) => {\n            enemy.draw();\n        });\n        this.player.draw();\n        this.killedEnemyFire.forEach( (f) => {\n            f.draw();\n        });\n        this.explosions.forEach ( (expl) => {\n            expl.draw();\n        })\n        this.ammo.forEach( (a) => {\n            a.draw();\n        })\n    }\n\n    addEnemy() {\n        this.enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.context, this.fireIncrease));\n    }\n\n    checkIfEnemyKilled() {\n        this.enemies.forEach( (enemy, i) => {\n            this.player.fire.forEach( (f, j) => {\n                if (Math.abs(enemy.pos.x+30 - f.pos.x-15) < 60 \n                && Math.abs(enemy.pos.y-f.pos.y)<30) {\n                    enemy.killed = true;\n                    this.player.fire.splice(j, 1);\n                }  \n            });\n            if (enemy.killed) {\n                this.killedEnemies++;\n                this.explosions.push(new _explosion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ context: this.context, x: enemy.pos.x, y: enemy.pos.y, animx: 0, animy: 0, }))\n                this.killedEnemyFire = this.killedEnemyFire.concat(enemy.fire);\n                this.enemies.splice(i, 1);\n                this.updateScore();\n                this.updateKilledNum();\n                this.explosionAudio.play();\n            }\n        });\n    }\n\n    checkIfEnemyHitPlayer() {\n        this.enemies.forEach( (enemy) => {\n            enemy.fire.forEach( (f) => {\n                if (Math.abs(f.pos.x - this.player.pos.x) < 30\n                    && Math.abs(f.pos.y - this.player.pos.y) < 30) {\n                        this.handleDamage();\n                    }\n            })\n        });\n        this.killedEnemyFire.forEach ( (f) => {\n            if (Math.abs(f.pos.x - this.player.pos.x) < 30\n            && Math.abs(f.pos.y - this.player.pos.y) < 30) {\n                this.handleDamage();\n            }\n        })\n    }\n\n    handleExplosion() {\n        this.explosions.forEach( (expl, i) => {\n            expl.pos.animx = expl.pos.animx + 0.5;\n            if (expl.pos.animx > 8) {\n                expl.pos.animy++; \n                expl.pos.animx = 0;\n            }\n            if (expl.pos.animy > 8) {\n                this.explosions.splice(i, 1);\n            } \n        });\n    }\n\n    updateScore() {\n        let newScore;\n        let scoreZeros = 6 - String(parseInt(this.score.innerHTML)).length;\n        scoreZeros = \"0\".repeat(scoreZeros);\n        newScore = scoreZeros + String(parseInt(this.score.innerHTML) + 10);\n        if (newScore.length > 6) newScore = newScore.slice(1);\n        this.score.innerHTML = newScore;\n    }\n\n    updateLevel() {\n        if (this.enemyIncrease === 10) return;\n        if (this.killedEnemies === this.killsToNextLevel) {\n            this.killsToNextLevel += 10;\n            this.enemyIncrease -= 10;\n            this.fireIncrease -= 5;\n            this.level.innerHTML = \" \" + String(parseInt(this.level.innerHTML) + 1);\n        }\n    }\n\n    updateKilledNum() {\n        this.killedNum.innerHTML = \" \" + String(parseInt(this.killedNum.innerHTML) + 1);\n    }\n\n    toggleSound() {\n        let buttonText = document.getElementById('mute');\n        if (this.muteMusic) {\n            this.myAudio.play();\n            this.muteMusic = false;\n            buttonText.innerHTML = \"MUTE\"\n        } else {\n            this.myAudio.pause();\n            this.muteMusic = true;\n            buttonText.innerHTML = \"PLAY MUSIC\"\n        }\n    }\n\n    clearDisplayDamage() {\n        this.displayHealth.innerHTML = this.health;\n        this.displayHealth.style.color = \"white\";\n        this.border.style.border = \"3px solid black\";\n    }\n\n    handleDamage() {\n        this.damageAudio.play();\n        this.health-=10;\n        this.displayHealth.style.color = \"red\";\n        this.border.style.border = \"3px solid red\";\n        if (this.health <= 0) {\n            this.gameOver();\n        }\n    }\n\n    checkForCollision() {\n        this.enemies.forEach( (enemy, i) => {\n            if (Math.abs(enemy.pos.x - this.player.pos.x) < 30\n                && Math.abs(enemy.pos.y - this.player.pos.y) < 30) {\n                this.handleDamage();\n            }\n        });\n    }\n\n    gameOver() {\n        this.killed = true;\n    }\n\n    requestAnimFrame() {\n        return window.requestAnimationFrame ||\n            window.webkitRequestAnimationFrame ||\n            window.mozRequestAnimationFrame ||\n            window.oRequestAnimationFrame ||\n            window.msRequestAnimationFrame ||\n            function (callback) {\n                window.setTimeout(callback, 1000 / 20);\n            };\n    } \n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('game');\nconst context = canvas.getContext(\"2d\");\n\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\nlet startButton = document.getElementById('start-button');\nlet newGameButton = document.getElementById('new-game-button');\nlet startModal = document.getElementById('start-modal');\nlet lostModal = document.getElementById('lost-modal');\nlet mute = document.getElementById('mute');\n\nstartButton.addEventListener(\"mousedown\", () => {\n    game.play();\n    game.toggleSound();\n    startModal.style.display = \"none\";\n});\n\nnewGameButton.addEventListener(\"mousedown\", () => {\n    lostModal.style.display = \"none\";\n    game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n    game.play();\n});\n\ncanvas.addEventListener(\"mousemove\", (event) => {\n\n    if (event.offsetX > 755) {\n        game.player.pos.x = 755;\n    } else {\n        game.player.pos.x = event.offsetX;\n    } \n\n    if (event.offsetY > 570) {\n        game.player.pos.y = 570;\n    } else {\n        game.player.pos.y = event.offsetY;\n    } \n\n});\n\ndocument.addEventListener(\"keypress\", (e) => {\n    if (e.keyCode === 32) game.player.shoot();\n});\n\nmute.addEventListener(\"mousedown\", () => {\n    game.toggleSound();\n});\n\ngame.myAudio.loop = true;\n\n\n\nwindow.game = game;\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player-fire.js":
/*!****************************!*\
  !*** ./src/player-fire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerFire; });\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire.js */ \"./src/fire.js\");\n\n\nclass PlayerFire extends _fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor({context, x, y, dx, dy}) {\n        super({context, x, y, dx, dy});\n        this.img = new Image();\n        this.img.src = './assets/images/fire.png';\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/player-fire.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _player_fire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-fire.js */ \"./src/player-fire.js\");\n\n\nclass Player {\n\n    constructor(context) {\n\n        this.context = context;\n        this.img = new Image();\n        this.img.src = './assets/images/spaceship.png';\n        this.timer = 0;\n        this.pos = {x: 300, y: 300};\n        this.fire = [];\n        this.fireSound = new Audio();\n        this.fireSound.src = './assets/audio/fire.wav';\n        this.shoot = this.shoot.bind(this);\n    }\n\n    draw() {\n        this.timer++;\n        this.context.drawImage(this.img, this.pos.x, this.pos.y);\n        this.fire.forEach( (f, i) => {\n            f.draw();\n            if (f.pos.y < 0) {\n                this.fire.splice(i, 1);\n            } else {\n                f.update();\n            }\n        });\n    }\n\n    shoot() {\n        this.fireSound.play();\n        this.fire.push(new _player_fire_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            context: this.context,\n            x: this.pos.x+10,\n            y: this.pos.y,\n            dx: 0,\n            dy: -5.2,\n        }))\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });