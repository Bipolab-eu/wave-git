var yoff = 0.0
let escala = 18

function setup () {
  var myCanvas = createCanvas(24 * escala, 8 * escala)
  myCanvas.parent("container")
}

function draw() {
  background('#00629B')
  fill('#FFB600')
  noStroke()
  beginShape()
  
  var xoff = 0
  yoff += 0.002 // si se comenta, detiene el movimiento
  for (let y = 0; y <= height; y += 4) {
    var value = noise(xoff, yoff)
    let x = map(value, 0, 1, 0, width)
    vertex(x, y)
    xoff += 0.01
  }

  vertex(0, height) // Punto A
  vertex(0, 0) // Punto B
  endShape()
}