import React, { useState } from "react"
// import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Slideshow = ({ data, className }) => {
  data = data.allMarkdownRemark
  const [index, setIndex] = useState(0)
  // console.log(data)

  //Minus 1 for array offset from 0
  const length = data.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = data.edges[index]
  // <Img
  //   fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
  //   key={node.id}
  //   objectFit="cover"
  //   objectPosition="50% 50%"
  // />
  return (
    <>
      <div className={className}>
        <Link to={node.fields.slug}>
          {" "}
          <h3>{node.frontmatter.title}</h3>
        </Link>

        <BackgroundImage
          key={node.id}
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          className="image"
          style={{
            backgroundPosition: "center top",
          }}
        />

      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </>
  )
}

export default Slideshow
