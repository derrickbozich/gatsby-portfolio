import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import { FaGithub } from "react-icons/fa"

// <svg width="400" height="110">
//   <rect
//     width="300"
//     height="100"
//     style={{
//       fill:'red'
//     }}
//   />
// </svg>

const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        <h3>{siteTitle}</h3>
        <div>Full Stack Developer</div>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <a href="#portfolio">Portfolio</a>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/archives">
            <div>Archives</div>
          </Link>

          <a href="https://github.com/derrickbozich">
            <FaGithub color="black" size={32} />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
