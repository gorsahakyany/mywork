class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.energy = 25
        this.directions = [
            [this.x -2, this.y -2],
            [this.x -1, this.y -2],
            [this.x , this.y -2],
            [this.x +1, this.y -2],
            [this.x +2, this.y -2],
            [this.x +2, this.y -1],
            [this.x +2, this.y],
            [this.x +2, this.y+1],
            [this.x +2, this.y+2],
            [this.x +1, this.y+2],
            [this.x , this.y+2],
            [this.x -1, this.y+2],
            [this.x -2, this.y+2],
            [this.x -2, this.y+1],
            [this.x -2, this.y],
            [this.x -2, this.y-1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            
        ];
    }
    getNewDirections() {
        this.directions = [
            [this.x -2, this.y -2],
            [this.x -1, this.y -2],
            [this.x , this.y -2],
            [this.x +1, this.y -2],
            [this.x +2, this.y -2],
            [this.x +2, this.y -1],
            [this.x +2, this.y],
            [this.x +2, this.y+1],
            [this.x +2, this.y+2],
            [this.x +1, this.y+2],
            [this.x , this.y+2],
            [this.x -1, this.y+2],
            [this.x -2, this.y+2],
            [this.x -2, this.y+1],
            [this.x -2, this.y],
            [this.x -2, this.y-1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))

        if (empty && this.energy>40) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            var newAk = new Amenaker(newX, newY)
            amenakerArr.push(newAk)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var food = random(this.chooseCell(1))
        var food2 = random(this.chooseCell(2))
        var food3 = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)

                }
            }
            
            this.x = newX
            this.y = newY
            this.energy+=2
        }
        if (food2) {
            var newX2 = food2[0]
            var newY2 = food2[1]
            matrix[newY2][newX2] = 4
            matrix[this.y][this.x] = 0
           
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX2 && xotakerArr[i].y == newY2) {
                    xotakerArr.splice(i, 1)

                }
            }
           
            this.x = newX2
            this.y = newY2
            this.energy+=2
        }
        if (food3) {
            var newX3 = food3[0]
            var newY3 = food3[1]
            matrix[newY3][newX3] = 4
            matrix[this.y][this.x] = 0
           
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX3 && gishatichArr[i].y == newY3) {
                    gishatichArr.splice(i, 1)

                }
            }
            this.x = newX3
            this.y = newY3
            this.energy+=2
        }


    }
    die(){
        if(this.energy<=0){
            matrix[this.y][this.x]=0
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1)
        }
    }

}



    }}
