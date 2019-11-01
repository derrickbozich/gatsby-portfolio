/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, className }) => {
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
  //
  // <footer>
  //   © {new Date().getFullYear()}, Built with
  //   {` `}
  //   <a href="https://www.gatsbyjs.org">Gatsby</a>
  // </footer>

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 1160,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main className={className}>{children}</main>

      </div>
      <Footer siteTitle={data.site.siteMetadata.title} email={data.site.siteMetadata.email} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
