import React from 'react'
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const About = () => (
  <div className="about" id="about">
    <div className="about-wrap container">
      <h3>About</h3>
      <div className="section">
        Hi! I'm Derrick Bozich, a full stack developer living in Denver, CO. I
        have been coding since 2016 and have a certificate in full stack web
        development from{' '}
        <a
          className="link"
          href="https://flatironschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Flatiron School
        </a>{' '}
        (NYC). I work with{' '}
        <a
          className="link"
          href="http://tommetzmedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tom Metz Media
        </a>
        , assisting with projects and do solo work as well. I love the process of
        learning, collaboration and doing quality work. I am looking to
        work with more clients and expand my portfolio. Please feel free to
        contact me, I would love to help you with your project.
      </div>
      <div className="section">
        <h4>Tools</h4>
        Node, Express, MongoDB, React, Redux, Wordpress, PHP, Apache, Sage,{' '}
        Gatsby, Prismic.io, GraphQL, The Slim Framework, Ruby on Rails, CSS3,{' '}
        HTML5, JavaScript, Git, Grunt, Processing , p5.js , Photoshop , Sketch ,
        Object Oriented Programming.{' '}
        <p>
          {' '}
          I am always learning new frameworks, languages, coding practices or
          strengthening my knowledge of what I am already familiar with. Right
          now, I am focusing on learning more advanced React concepts.
        </p>
      </div>
      <div className="section">
        <h4>Clients</h4>

        <div className="clients item">
          <a
            href="https://www.mexicansummer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mexican Summer
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
