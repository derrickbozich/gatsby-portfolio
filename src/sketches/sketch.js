export default function sketch(p) {
  // let canvas
  // const numLines = 50.0
  let width = 0
  let height = 0
  // const widthInterval = width / numLines
  // let img // Declare variable 'img'.
  // let image = require("../images/sinwav.svg")

  let t = 0
  let color = p.color("rgba(100%, 0%, 0%, 0.63)")
  const colors = [
    p.color("rgba(100%, 0%, 0%, 0.63)"), //red
    p.color("rgba(255,0,183, 0.63)"), //pink
    p.color("rgba(0,0,255, 0.63)"), //blue
    p.color("rgba(255,255,102, 0.63)"), //yellow
    p.color("rgba(255,153,102, 0.63)"), //orange
    p.color("rgba(153,255,102, 0.99)"), //lime
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
    p.color("rgba(40%, 10%, 80%, 0.63)"),
  ]


  p.setup = () => {
    p.createCanvas(width, height)
    p.noStroke()
  }

  p.draw = () => {
    p.blendMode(p.BLEND)
    p.clear()
    p.blendMode(p.DARKEST)

    p.fill(color)
    blob(
      width/3,
      width / 2 + p.noise(t / 2 + 4),
      height / 2 + p.noise(t / 2 + 5),
      0.75,
      t + 2
    )

    t += 0.0015
  }

  p.myCustomRedrawAccordingToNewPropsHandler = ({ index, i, newWidth, newHeight }) => {
    const pos = (index + i) % 6

    if (typeof newWidth !== 'undefined') {
      width = newWidth
      height = newHeight
      p.resizeCanvas(newWidth, newHeight);
    }

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
