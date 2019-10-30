import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import { FaGithub } from "react-icons/fa"

const Footer = ({ siteTitle }) => (
  <footer className="wrap">
    <div>
      <h3>{siteTitle}</h3>

      <a href="https://github.com/derrickbozich">
        <FaGithub color="white" size={32} />
      </a>
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
