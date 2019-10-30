import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div class="about">
      <div class="content">
        <div class="header-phrase">
          Hi! I'm Derrick Bozich. A full stack developer living in Denver, CO. Thank you for visiting my portfolio!
        </div>
        <div class="about-wrap">
          <h3>About Me</h3>
          <div class="bio item">
            I have been coding since 2016 and have a certificate in full stack
            web development from{" "}
            <a class="link" href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">
              The Flatiron School
            </a>{" "}
            (NYC). I am freelance developer currently working with{" "}
            <a class="link" href="http://tommetzmedia.com" target="_blank" rel="noopener noreferrer">
              Tom Metz Media
            </a>
            . I have a passion for learning, collaboration and doing quality
            work!
          </div>

          <h3>My Tools</h3>
          <div class="my-tools item">
            Node, Express, MongoDB, React, Redux, Wordpress, PHP, Sage, Ruby on
            Rails, CSS3, HTML5, JavaScript, Git, Processing, Photoshop, Sketch,
            Gatsby.js, Prismic.io, GraphQL, Object Oriented Programming.

            <br>
            </br>

             I am
            always open to learning new frameworks or languages, I am currently
            studying laravel and angular.
          </div>

          <h3>Clients</h3>
          <div class="clients item">
            <a href="https://marfamyths.com/" target="_blank" rel="noopener noreferrer">
              Marfa Myths
            </a>
            <a href="https://www.mosspinkflora.com/" target="_blank" rel="noopener noreferrer">
              Moss Pink Flora
            </a>
            <a href="http://citylaxdenver.org/" target="_blank" rel="noopener noreferrer">
              Denver CityLAX
            </a>
            <a href="https://multidim.net/" target="_blank" rel="noopener noreferrer">
              Multidim Recordings
            </a>
            <a href="https://coloradocider.com/" target="_blank" rel="noopener noreferrer">
              Colorado Cider
            </a>
          </div>

          <h3>Contact</h3>
          <div class="item">
            <a target="_blank" href="mailto:dbozich1@gmail.com">
              dbozich1@gmail.com
            </a>
          </div>

          <div class="footer-phrase">
            I am currently looking to expand my portfolio and work with new
            clients.
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
