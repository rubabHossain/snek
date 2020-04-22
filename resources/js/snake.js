'use strict'

class Node {
    x = 0;
    y = 0;
    next = null;
    prev = null;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(newHead) {
        newHead.next = this.head;
        if(this.head) {
            this.head.prev = newHead;
        }
        this.head = newHead;
        if(!this.tail) {
            this.tail = this.head;
        }
    }

    removeLast() {
        if(!this.tail) {
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    

    
}

class Snake {
    

    constructor(initX, initY) {
        this.snakeSegmentLength = 10;
        this.speed = this.snakeSegmentLength;
        this.snakeBody = new DoublyLinkedList();
        this.xVel = this.speed;
        this.yVel = 0;

        // add head of snake to body
        this.snakeBody.addFirst(new Node(initX, initY));
    }

    moveHead() {
        // create new head of snake
        let newX = (this.snakeBody.head.x + this.xVel) % width;
        let newY = (this.snakeBody.head.y + this.yVel) % height;
        newX = newX < 0 ? width + newX : newX;
        newY = newY < 0 ? height + newY : newY;
        let newHead = new Node(newX, newY);
        
        // color new head of snake
        fill('white');
        square(newHead.x, newHead.y, this.snakeSegmentLength);

        // add head to snake body.
        this.snakeBody.addFirst(newHead);
    }


    moveTail() {
        
        // color tail black
        fill('black');
        square(this.snakeBody.tail.x, this.snakeBody.tail.y, this.snakeSegmentLength);

        // remove tail from body
        this.snakeBody.removeLast();
    }


    updateDirection() {
        switch(keyCode) {
            case DOWN_ARROW:
                this.xVel = 0;
                this.yVel = this.speed;
                break;
            case UP_ARROW:
                this.xVel = 0;
                this.yVel = -1 * this.speed;
                break;
            case LEFT_ARROW:
                this.xVel = -1 * this.speed;
                this.yVel = 0;
                break;
            case RIGHT_ARROW:
                this.xVel = this.speed;
                this.yVel = 0;
                break;
            
        }
    }


}