import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import About from "../components/about"
// import Slideshow from "../components/slideshow"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // <Projects
  //   data={data}
  //   className="projects"
  //   id="portfolio"
  //   loading="eager"
  // />

  return (
    <Layout className="home" home={true}>
      <SEO title="Home" />
      <Landing />


      <About />
    </Layout>
  )
}

export default IndexPage
