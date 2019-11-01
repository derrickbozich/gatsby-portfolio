import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import About from "../components/about"
import Slideshow from "../components/slideshow"
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

  // <Projects data={data} />
  // <Slideshow data={data} />
  // <Projects
  //   data={data}
  //   className="projects"
  //   id="portfolio"
  //   loading="eager"
  // />

  // <div className="home-projects">
  //   <div className="home-project">
  //     <div className="first-letter letter">A</div>
  //     <div className="second-letter letter">P</div>
  //   </div>
  //   <div className="home-project">
  //     <div className="first-letter letter">M</div>
  //     <div className="second-letter letter">M</div>
  //   </div>
  //   <div className="home-project">
  //     <div className="first-letter letter">A</div>
  //     <div className="second-letter letter">L</div>
  //   </div>
  // </div>

  // <h2 className="featured-works">Featured Works</h2>


  return (
    <Layout className="home">
      <SEO title="Home" />
      <h3>Portfolio</h3>
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
