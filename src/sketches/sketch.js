export default function sketch(p) {
  let canvas
  const numLines = 50.0
  const width = 600
  const height = 500
  const widthInterval = width / numLines;

  // function randomNumber() {
  //   return Math.round(Math.random() * 255)
  // }

  // function randomColor() {
  //   return `${randomNumber()},${randomNumber()},${randomNumber()}`
  // }

  p.setup = () => {
    canvas = p.createCanvas(width, height)
    p.strokeWeight(3)
    // p.background(randomColor())
    // p.ellipse(150, 100, 100, 100)
  }

  p.draw = () => {
    // p.background(randomNumber())
    // p.ellipse(150, 100, 100, 100)
    // for (var i = 0; i < numLines; i++) {
    //   p.line(0, i * 10, width, i * 10)
    //   p.stroke(i + 3);
    // }
    let a = 0.0
    let inc = p.TWO_PI / numLines
    for (let i = 0; i < numLines; i++) {
      p.line(i * widthInterval, height/2, i * widthInterval, height/2 + p.sin(a) * height/2)
      a = a + inc
    }
    // console.log('draw');
  }

  p.myCustomRedrawAccordingToNewPropsHandler = ({ color }) => {
    if (canvas) {
      //Make sure the canvas has been created
      // p.fill(color)
      // p.background("red")
      console.log(color)
    }
  }
}
