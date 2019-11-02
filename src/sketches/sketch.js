export default function sketch(p) {
  let canvas
  const numLines = 50.0
  const width = 358
  const height = 400
  const widthInterval = width / numLines
  let img // Declare variable 'img'.
  let image = require("../images/sinwav.svg")

  // function randomNumber() {
  //   return Math.round(Math.random() * 255)
  // }

  // function randomColor() {
  //   return `${randomNumber()},${randomNumber()},${randomNumber()}`
  // }

  // p.setup = () => {
  //   canvas = p.createCanvas(width, height)
  //   p.strokeWeight(3)
  //   // p.background(randomColor())
  //   // p.ellipse(150, 100, 100, 100)
  // }
  //
  // p.draw = () => {
  //   // p.background(randomNumber())
  //   // p.ellipse(150, 100, 100, 100)
  //   // for (var i = 0; i < numLines; i++) {
  //   //   p.line(0, i * 10, width, i * 10)
  //   //   p.stroke(i + 3);
  //   // }
  //   let a = 0.0
  //   let inc = p.TWO_PI / numLines
  //   for (let i = 0; i < numLines; i++) {
  //     p.line(i * widthInterval, height/2, i * widthInterval, height/2 + p.sin(a) * height/2)
  //     a = a + inc
  //   }
  //   // console.log('draw');
  // }
  //

  // By Roni Kaufman

  let t = 0
  let color = p.color("rgba(100%, 0%, 0%, 0.63)")
  const colors = [
    p.color("rgba(100%, 0%, 0%, 0.63)"), //red
    p.color("rgba(255,0,183, 0.63)"), //pink
    p.color("rgba(0,0,255, 0.63)"), //blue
    p.color("rgba(255,255,102, 0.63)"), //yellow
    p.color("rgba(255,153,102, 0.63)"),  //orange
    p.color("rgba(153,255,102, 0.99)"), //lime
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
  ]

  // p.preload = () => {
  //   img = loadImage("assets/laDefense.jpg")
  // }

  p.setup = () => {
    p.createCanvas(width, height)
    // p.colorMode(p.HSB, 1)
    p.noStroke()
    img = p.loadImage(image) // Load the image
  }

  p.draw = () => {
    p.blendMode(p.BLEND)
    // p.background(1)
    p.clear()

    p.blendMode(p.DARKEST)
    // p.image(img, 0, 0)

    p.fill(color)
    blob(
      100,
      width / 2 + p.noise(t / 2 + 4),
      height / 2 + p.noise(t / 2 + 5),
      0.75,
      t + 2
    )

    t += 0.001
  }

  p.myCustomRedrawAccordingToNewPropsHandler = ({ index, i }) => {
    const pos = (index + i) % 6

    console.log(`pos: ${pos}`)
    color = colors[pos]
  }

  // Draw a blob of approximate radius size,
  // center (xCenter, yCenter),
  // tightness k > 0 (0 being perfect circle),
  // at time t (for evolution)

  function blob(size, xCenter, yCenter, k, t) {
    p.beginShape()
    for (let theta = 0; theta < 2 * p.PI; theta += 0.01) {
      let r1, r2
      if (theta < p.PI / 2) {
        r1 = p.cos(theta)
        r2 = 1
      } else if (theta < p.PI) {
        r1 = 0
        r2 = p.sin(theta)
      } else if (theta < (3 * p.PI) / 2) {
        r1 = p.sin(theta)
        r2 = 0
      } else {
        r1 = 1
        r2 = p.cos(theta)
      }
      let r = size + p.noise(k * r1, k * r2, t) * (2 / 3) * size
      let x = xCenter + r * p.cos(theta)
      let y = yCenter + r * p.sin(theta)
      p.curveVertex(x, y)
    }
    p.endShape()
  }
}
