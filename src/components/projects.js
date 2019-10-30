import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// import Image from "../components/image"

const Projects = ({ data }) => {
  return data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <Link to={node.fields.slug}>
        {" "}
        <h3>{node.frontmatter.title}</h3>
      </Link>

      <p>{node.excerpt}</p>
      <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
    </div>
  ))
}

export default Projects
