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

const Header = ({ siteTitle, home }) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand>
          <Link to="/">{home ? "" : <h4>Derrick Bozich</h4>}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {home ? (
              <a href="/#portfolio">Portfolio</a>
            ) : (
              <Link to="/#portfolio">
                <div>Portfolio</div>
              </Link>
            )}

            {home ? (
              <a href="/#about">About</a>
            ) : (
              <Link to="/#about">
                <div>About</div>
              </Link>
            )}

            {home ? (
              <a href="/#contact">Contact</a>
            ) : (
              <Link to="/#contact">
                <div>Contact</div>
              </Link>
            )}

            <a href="https://github.com/derrickbozich" target="_blank" rel="noopener noreferrer">
              <FaGithub color="black" size={32} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
