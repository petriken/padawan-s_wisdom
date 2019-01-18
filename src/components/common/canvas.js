import { pathMonsterParts } from "./pathMonsterParts";
import { playSound } from "../battle/audio/playSound";

let canvasContext;
let width = 1000;
let height = 500;

let requestID;
let totalResources = 9;
let numResourcesLoaded = 0;
let x = 740;
let y = 240;
let damageHeight = +130;
let damage = false;
let crash = false;
let fireball = false;
let breathInc = 0.1;
let breathDir = 1;
let breathAmt = 0;
let breathMax = 3;
let breathInterval = setInterval(updateBreath, 1000 / fps);

let fireballInc = 50;
let fireballAmt = 0;
let fireballMax = 5000;
let fireballInterval = 0;
var fps = 30;
let images = {};

let right_hand = {};
let right_hand_up = {};
let body = {};
let left_leg = {};
let right_leg = {};
let left_hand = {};
let left_hand_up = {};
let head = {};
let weapon = {};

function updateBreath() {

  if (breathDir === 1) {
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else {
    breathAmt += breathInc;
    if (breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}

function updatefireball() {
  fireballAmt += fireballInc;
}

function getMonsterParts(path) {
  let index = Math.floor(Math.random() * pathMonsterParts[path].length);
  let pathParts = pathMonsterParts[path][index];
  return pathParts;
}

getAllMonsterParts();

export function getAllMonsterParts() {
  right_hand = getMonsterParts('right_hand');
  right_hand_up = getMonsterParts('right_hand_up');
  body = getMonsterParts('body');
  left_leg = getMonsterParts('left_leg');
  right_leg = getMonsterParts('right_leg');
  left_hand = getMonsterParts('left_hand');
  left_hand_up = getMonsterParts('left_hand_up');
  head = getMonsterParts('head');
  weapon = getMonsterParts('weapon');
  console.log('getAllMonsterParts');
}

function drawCanvas() {
  const gameContainer = document.querySelector('.battle-content__fight_canvas-wrapper');

  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  const canvas = document.createElement('canvas');
  canvasContext = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  gameContainer.appendChild(canvas);
  console.log('drawCanvas');

}

function clearArea() {
  canvasContext.clearRect(0, 0, width, height);
}

export function loadAllImage() {
  loadImage(right_hand);
  loadImage(right_hand_up);
  loadImage(body);
  loadImage(left_leg);
  loadImage(right_leg);
  loadImage(left_hand);
  loadImage(left_hand_up);
  loadImage(head);
  loadImage(weapon);
}

loadAllImage();

function loadImage(name) {
  images[name] = new Image();
  images[name].onload = function () {
    resourceLoaded();
  };
  images[name].src = "images/monstr/" + name + ".png";
}

function resourceLoaded() {
  numResourcesLoaded += 1;
  if (numResourcesLoaded === totalResources) {
    console.log('loadImage ok')
  }
}

function redraw() {
  if (damage) {
    canvasContext.drawImage(images[right_hand_up], x + 150, y - 150 - breathAmt, 125, 104);
  } else if (crash) {
    canvasContext.drawImage(images[right_hand], x + 150, y + 150, 125, 104);
  } else {
    canvasContext.drawImage(images[right_hand], x + 120, y + 70 - breathAmt, 125, 104);
  }

  if (damage) {
    canvasContext.drawImage(images[body], x, y + damageHeight - breathAmt, 197, 204);
  } else if (crash) {
    canvasContext.drawImage(images[body], x, y - 50, 197, 204);
  } else {
    canvasContext.drawImage(images[body], x, y - breathAmt, 197, 204);
  };
  canvasContext.drawImage(images[left_leg], x + 10, y + 210, 87, 37);
  canvasContext.drawImage(images[right_leg], x + 80, y + 210, 87, 37);

  if (crash) {
    canvasContext.drawImage(images[head], x - 20, y + 10, 260, 233)
  } else {
    canvasContext.drawImage(images[head], x - 20, y - 150, 260, 233);
  };

  if (damage) {
    canvasContext.drawImage(images[left_hand_up], x - 160, y - 150 - breathAmt, 125, 104);
    canvasContext.drawImage(images[weapon], x - 180, y + -140 - breathAmt, 100, 100);
  } else if (crash) {
    canvasContext.drawImage(images[left_hand], x - 60, y + 150, 125, 104);
    canvasContext.drawImage(images[weapon], x - 80, y + 150, 100, 100);
  } else if (fireball) {
    canvasContext.drawImage(images[weapon], x - 80 - fireballAmt, y + 80, 100, 100);
    canvasContext.drawImage(images[left_hand_up], x - 60, y + 70 - breathAmt, 125, 104);
  } else {
    canvasContext.drawImage(images[left_hand], x - 60, y + 70 - breathAmt, 125, 104);
    canvasContext.drawImage(images[weapon], x - 80, y + 80 - breathAmt, 100, 100);
  }
}

export function getDamage() {

  if (!damage) {
    damage = true;
    playSound("wrong");
    setTimeout(land, 500);
  }
  function land() {
    damage = false;
  }

  console.log('getDamage');
}

export function getCrash() {

  if (!crash) {
    crash = true;
    playSound("glass");
    setTimeout(land, 3200);
  }
  function land() {
    crash = false;
  }
  console.log('getCrash');
}

export function flyFireball() {
  fireballInterval = setInterval(updatefireball, 1000 / fps);
  if (!fireball) {
    fireball = true;
    playSound("fireball");
    setTimeout(land, 1000);
  }
  function land() {
    fireball = false;
    clearInterval(fireballInterval);
    fireballAmt = 0;
  }
  console.log('fireball');
}

function renderFight() {
  clearArea();
  redraw();
}
function startGameLoop() {
  function frame() {
    renderFight();
    requestAnimationFrame(frame);
  }
  requestID = requestAnimationFrame(frame);
  console.log('startGameLoop');

}

export function startAnimation() {

  drawCanvas();
  startGameLoop();
  console.log('startAnimation');
}