import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"


export default ({ data }) => {
  let post = data.markdownRemark

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="blog-post container">
        <h3 className="header">{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href={post.frontmatter.href} target="_blank" rel="noopener noreferrer">
          <Img fluid={featuredImgFluid} />
        </a>

        <FaAngleDoubleRight className="next" color="black" size={32} />
        <FaAngleDoubleLeft className="previous" color="black" size={32} />

      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        href
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
