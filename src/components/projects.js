import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import P5Wrapper from "react-p5-wrapper"
import sketch from "../sketches/sketch"
import useWindowSize from "../helpers/useWindowSize"

const Projects = ({ data, className, id }) => {
  const [index, setIndex] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const projectEl = useRef(null)

  const size = useWindowSize()

  const posts = data.allMarkdownRemark.edges

  const length = posts.length - 1

  //Minus 1 for array offset from 0
  const node = posts[index]
  // const posts = data.allMarkdownRemark.edges
  const next = index === length ? posts[0] : posts[index + 1]
  const prev = index === 0 ? posts[length] : posts[index - 1]

  // const handleNext = () =>
  //   index === length ? setIndex(0) : setIndex(index + 1)
  // const handlePrevious = () =>
  //   index === 0 ? setIndex(length) : setIndex(index - 1)
  const handleDot = i => setIndex(i)

  const currentPosts = size.width >= 768 ? [prev, node, next] : posts

  // const totalDots = Math.ceil(posts.length / currentPosts)

  const resizeCanvas = () => {
    if (projectEl.current === null) {
      console.log("projectEl.current === null")
      return
    } else {
      const dimensions = projectEl.current.getBoundingClientRect()
      setCanvasWidth(dimensions.width)
      setCanvasHeight(dimensions.height)
    }
  }


  useEffect(() => {
    resizeCanvas()
  }, [size.width])

  return (
    <div className={className} id={id}>
      <div className="container">
        <h3>Portfolio</h3>

        <div className="projects-wrap">
          {currentPosts.map(({ node }, i) => (
            <div ref={projectEl} key={node.id} className="project">
              <Link to={node.fields.slug} className="header">
                {" "}
                <h4>{node.frontmatter.title}</h4>
              </Link>
              <Link to={node.fields.slug}>
                <BackgroundImage
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  className="image"
                  style={{
                    backgroundPosition: "center top",
                  }}
                />
                {typeof window !== "undefined" && P5Wrapper && (
                  <P5Wrapper
                    className="canvas"
                    sketch={sketch}
                    i={i}
                    index={index}
                    newWidth={canvasWidth}
                    newHeight={canvasHeight}
                  ></P5Wrapper>
                )}
              </Link>

              <p className="excerpt">{node.excerpt}</p>
            </div>
          ))}
        </div>
        {size.width > 768 ? (
          <div className="dots">
            {posts.map(({ node }, i) =>
              index === i ? (
                <div
                  key={i}
                  className="dot active"
                  onClick={() => handleDot(i)}
                ></div>
              ) : (
                <div key={i} className="dot" onClick={() => handleDot(i)}></div>
              )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Projects
