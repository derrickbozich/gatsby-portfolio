// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Nav from "react-bootstrap/Nav"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = ({ siteTitle, email }) => (
  <footer className="wrap" id="contact">
    <div>
      <h4 className="header">Contact</h4>
      <a
        className="email"
        href="mailto:dbozich1@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p> dbozich1@gmail.com</p>
      </a>
      <div className="icons">
        <a
          href="mailto:dbozich1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail color="white" size={32} />
        </a>
        <a
          href="https://github.com/derrickbozich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" size={32} />
        </a>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
