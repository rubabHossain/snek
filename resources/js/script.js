'use strict'

let snek = null;


function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.parent('game');
    background(0);

    let initX = 80;
    let initY = 80;
    snek = new Snake(initX, initY);
}

function draw() {

    snek.moveHead();
    snek.moveTail();
}