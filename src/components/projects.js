import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

// import Image from "../components/image"

const Projects = ({ data, className, id, loading }) => {
  return (
    <div className={className} id={id}>
      <div className="container" id={id}>
        <h3>Portfolio</h3>
        <div className="projects-wrap">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div key={node.id} className="project">
              <Link to={node.fields.slug} className="header">
                {" "}
                <h3>{node.frontmatter.title}</h3>
              </Link>
              <Link to={node.fields.slug}>
                <BackgroundImage
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  className="image"
                  style={{
                    backgroundPosition: "center top",
                  }}
                  critical
                />
              </Link>

              <p className="excerpt">{node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
