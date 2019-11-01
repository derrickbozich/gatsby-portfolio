// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Nav from "react-bootstrap/Nav"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = ({ siteTitle, email }) => (
  <footer className="wrap ">
    <div>
      <h4 className="header">Contact</h4>
      <a className="email" href="mailto:dbozich1@gmail.com">
        <p> dbozich1@gmail.com</p>
      </a>
      <div className="icons">
        <a href="https://github.com/derrickbozich">
          <FaGithub color="white" size={32} />
        </a>
        <a href="mailto:dbozich1@gmail.com">
          <AiOutlineMail color="white" size={32} />
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
