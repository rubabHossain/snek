'use strict'

let snake = null;
function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.parent('game');
    background(0);

    let initX = 80;
    let initY = 80;
    snake = new Snake(initX, initY);
}

function draw() {
    snake.moveHead();
    snake.moveTail();
}