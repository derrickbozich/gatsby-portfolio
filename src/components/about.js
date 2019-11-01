import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const About = () => (
  <div className="about" id="about">
    <div className="about-wrap container">
      <h3>About</h3>
      <div className="section">
        Hi! I'm Derrick Bozich. A full stack developer living in Denver, CO. I
        have been coding since 2016 and have a certificate in full stack web
        development from{" "}
        <a
          className="link"
          href="https://flatironschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Flatiron School
        </a>{" "}
        (NYC). I am freelance developer currently working with{" "}
        <a
          className="link"
          href="http://tommetzmedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tom Metz Media
        </a>
        . I have a passion for learning, collaboration and doing quality work.
        I am currently looking to work with more clients and expand my portfolio.
      </div>
      <div className="section">
        <h4>Tools</h4>
        The main tools I use are: Node, Express, MongoDB, React, Redux,
        Wordpress, PHP, Sage, Ruby on Rails, CSS3, HTML5, JavaScript, Git,
        Processing, Photoshop, Sketch, Gatsby.js, Prismic.io, GraphQL, Object
        Oriented Programming.
        <br></br>I am always open to learning new frameworks or languages, I am
        currently studying Laravel and Angular.
      </div>
      <div className="section">
      <h4>Clients</h4>
        <div className="clients item">
          <a
            href="https://marfamyths.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marfa Myths
          </a>
          <a
            href="https://www.mosspinkflora.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moss Pink Flora
          </a>
          <a
            href="http://citylaxdenver.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denver CityLAX
          </a>
          <a
            href="https://multidim.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multidim Recordings
          </a>
          <a
            href="https://coloradocider.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorado Cider
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default About
