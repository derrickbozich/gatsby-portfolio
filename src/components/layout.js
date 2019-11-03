/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"
// import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, className, home }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `)
  const colorRef = useRef()

  // <button
  //   onClick={() => {
  //     console.log(colorRef.current.style)
  //   }}
  // ></button>

  return (
    <div ref={colorRef} className="layout">
      <Header siteTitle={data.site.siteMetadata.title} home={home} />

      <div
        style={
          {
            // margin: `0 auto`,
            // maxWidth: 1160,
            // padding: `0px 1.0875rem 1.45rem`,
            // paddingTop: 0,
          }
        }
      >

        <main className={className}>{children}</main>
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        email={data.site.siteMetadata.email}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
