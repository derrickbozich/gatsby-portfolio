import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"

export default ({ data, pageContext }) => {
  const { next, prev } = pageContext
  let post = data.markdownRemark

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  // function nextPost() {
  //   console.log("next")
  // }
  // function previousPost() {
  //   console.log("previous")
  // }

  return (
    <Layout home={false}>
      <SEO title={post.frontmatter.title} />
      <div className="blog-post container">
        <h3 className="header">{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a
          href={post.frontmatter.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={featuredImgFluid} />
        </a>

        {next && (
          <Link to={next.fields.slug}>
            <FaAngleDoubleRight className="next" color="black" size={32} />
          </Link>
        )}

        {prev && (
          <Link to={prev.fields.slug}>
            <FaAngleDoubleLeft
              className="previous"
              color="black"
              size={32}
              // onClick={previousPost}
            />
          </Link>
        )}
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
