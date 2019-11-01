import React, { useState } from 'react';
// import P5 from "p5"
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch';
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"





const Landing = () => {

  function randomNumber(){
    return Math.round(Math.random()*255);
  }

  const [color, setColor] = useState({color:`${ randomNumber()},${ randomNumber()},${ randomNumber()}`});

  function randomColor(){
    setColor({color:`${ randomNumber()},${ randomNumber()},${ randomNumber()}`}
    )
  }

 //  <button onClick={() => randomColor()}>
 //   Click me
 // </button>

  return (
    <div className="landing container">
      <h3>Derrick Bozich</h3>
      <div>Full Stack Developer</div>

      <P5Wrapper  sketch={sketch} color={color}></P5Wrapper>
    </div>
  )
}

export default Landing
