'use strict'

let snek = null;            // global ref to Snake Obj
let pellet = null;          // global ref to Pellet Obj
let frameCounter = 0;       // frameCounter & refreshThreshold used together to slow down animation.
let refreshThreshold = 2;   // higher number => slower refreshRate



function setup() {
    let padding = 50;
    let w = window.innerWidth - padding;
    let h = window.innerHeight - padding;
    let canvas = createCanvas(w, h);
    canvas.parent('game');
    background(0);

    let initSnekX = 80;
    let initSnekY = 80;
    snek = new Snake(initSnekX, initSnekY);

    pellet = new Pellet();
    pellet.spawnNew(snek)
}


// TODO: add game states for win/loss/menu/etc.
function draw() {
    // redraw screen elements only if framecounter has reached threshold
    if(frameCounter++ > refreshThreshold) {
        frameCounter = 0; // reset framescounter

        // respond to key presses
        snek.updateDirection();
        
        // check for collision with pellet
        if(snek.isCollided(pellet)) {
            pellet.spawnNew(snek); 
            snek.grow();
        }

        // check for collision with self
        if(snek.isCannibalized()) {
            //TODO: set game state to loss
        }

        // draw head of snake 1 unit forward, remove tail
        snek.moveHead();
        snek.moveTail();
    }
}