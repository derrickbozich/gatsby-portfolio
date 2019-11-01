import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import About from "../components/about"
import Slideshow from "../components/slideshow"
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
                  fluid(maxWidth: 800) {
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

  return (
    <Layout className="home">
      <SEO title="Home" />
      <Landing />

      <Projects
        data={data}
        className="projects"
        id="portfolio"
        loading="eager"
      />
      <About />
    </Layout>
  )
}

export default IndexPage
