class Pellet {

    constructor(initX, initY) {
        this.x = 0;
        this.y = 0;
        this.size = 10;
    }

    spawnNew(snake) {

        let newX, newY;
        let inValidPosition = true;

        // generate coords and check if valid position.
        while(inValidPosition) {
            // generate new rand location for pellet that is at grid boundary
            newX = Math.floor(Math.random() * Math.floor(width/this.size));
            newY = Math.floor(Math.random() * Math.floor(height/this.size));
            

            // check if rand coordinates land within snake.
            // if it doesnt, return coordaintes,
            // if it does, try again with diff coordinates
            let cur = snake.snakeBody.head;
            while(cur!= null) {
                if(cur.x == newX && cur.y == newY) {
                    inValidPosition = true;
                    break;
                } else {
                    inValidPosition = false;
                }
                cur = cur.next;
            }

        }

        this.x = newX * 10;
        this.y = newY * 10;
        fill('white');
        square(this.x, this.y, this.size)
    }


}