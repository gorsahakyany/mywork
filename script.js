var matrix = [];
matrix =fillMatrix(30,30)
console.log(matrix)
function fillMatrix(n,m){
  var matrix = []
  for(var i=0;i<n;i++){
    matrix.push([])
    for(var j =0;j<m;j++){
      
      matrix[i].push(0)
    }
  }
  return matrix
}
for(var g=0;g<30;g++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=1
}
for(var h=0;h<25;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=2
}
for(var h=0;h<35;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=3
}
for(var h=0;h<6;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=4
}
for(var h=0;h<4;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=5
}
var side = 15;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var pixArr= [] ;



for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y)
      grassArr.push(gr)
    }
    else if (matrix[y][x] == 2) {
      var xt = new Xotaker(x, y)
      xotakerArr.push(xt)
    }
    else if (matrix[y][x] == 3) {
      var gt = new Gishatich(x, y)
      gishatichArr.push(gt)
    }
    else if (matrix[y][x] == 4) {
      var am = new Amenaker(x, y)
      amenakerArr.push(am)
    }
    else if (matrix[y][x] == 5) {
      var px = new Pix(x, y)
      pixArr.push(px)
    }



  }
}

function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}



function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow")

      }
      else if (matrix[y][x] == 3) {
        fill("red")

      }
      else if (matrix[y][x] == 4) {
        fill("orange")

      }
      else if (matrix[y][x] == 5) {
        fill("lightblue")

      }

      rect(x * side, y * side, side, side);


      fill("blue")
      text(x + " " + y, x * side + side / 2, y * side + side / 2)

    }
  }
  for (var i in grassArr) {
    grassArr[i].mult()
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat()
    xotakerArr[i].mult()
    xotakerArr[i].move()
    xotakerArr[i].die()
  }
  for (var i in gishatichArr) {
    gishatichArr[i].eat()
    gishatichArr[i].mult()
    gishatichArr[i].move()
    gishatichArr[i].die()


  }
  for (var i in amenakerArr) {
    amenakerArr[i].eat()
    amenakerArr[i].mult()
    amenakerArr[i].move()
    amenakerArr[i].die()
  }
  for (var i in pixArr) {
    pixArr[i].eat()
    pixArr[i].mult()
    pixArr[i].move()
    pixArr[i].die()
  }

}
