import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import { FaGithub } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <h3>{siteTitle}</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/about">
            <h3>About</h3>
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
