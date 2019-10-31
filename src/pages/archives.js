import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Slideshow from "../components/slideshow"
// import Image from "../components/image"
import SEO from "../components/seo"

const ArchivesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { featured: { eq: false } } }
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

  // <Projects data={data} />
  // <Slideshow data={data} />

  return (
    <Layout className="archives">
      <SEO title="Archives" />
      <Projects data={data} className="projects" />
    </Layout>
  )
}

export default ArchivesPage
