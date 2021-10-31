// Two different data types here: strings and numbers
// Differentiate between strings and variables

// Key words: function and var

function setup(){
    var canvas = createCanvas(800, 200)
    // jumbo-canvas is a string
    canvas.parent('jumbo-canvas')
    // background(255, 0, 200)
}

var tronX = 50
var speed = 5

function draw() {
    // Animate
    tronX = tronX + speed
    clear()
 //  rect(distanceX, distanceY, width, height)
    fill(0)
    rect(tronX, 90, 150, 80, 20)
//   ellipse(distanceX, distanceY, width, height);
    fill(255)
    ellipse(tronX, 150, 80, 80)
    ellipse(tronX + 150, 150, 80, 80)

    if (tronX > 700 || tronX < 0) {
      speed = speed * -1
    }

    // Next Goals
    // See if you can get two cars in the jumbotron to race each other!

    // See if students can build a tunnel to race the cars into!

    // See if student can pave a road for the tron cars to race on.
}
