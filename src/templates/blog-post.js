import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

export default ({ data }) => {
  let post = data.markdownRemark
  console.log(JSON.stringify(post, null, 2))

  let featuredImgFluid = post.frontmatter.featuredImage


  // <h1>{post.frontmatter.title}</h1>
  //
  // <div dangerouslySetInnerHTML={{ __html: post.html }} />
  //  <Img fluid={featuredImgFluid} />
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
         <Image fileName={featuredImgFluid} />

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage
      }
    }
  }
`
