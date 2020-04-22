'use strict'

let snek = null;
let frameCounter = 0; // frameCounter & refreshThreshold used together to slow down animation.
let refreshThreshold = 0; // higher number => slower refreshRate

function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.parent('game');
    background(0);

    let initX = 80;
    let initY = 80;
    snek = new Snake(initX, initY);
}

function draw() {
    // redraw screen elements only if framecounter has reached threshold
    if(frameCounter++ > refreshThreshold) {
        frameCounter = 0; // reset framescounter
        snek.moveHead();
        snek.moveTail();
    }

    snek.updateDirection();
}