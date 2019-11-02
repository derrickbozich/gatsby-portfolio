import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import P5Wrapper from "react-p5-wrapper"
import sketch from "../sketches/sketch"
// import { FaAngleDoubleRight } from "react-icons/fa"
// import { FaAngleDoubleLeft } from "react-icons/fa"
import useWindowSize from "../helpers/useWindowSize"

// import Image from "../components/image"

// <BackgroundImage
//   fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
//   className="image"
//   style={{
//     backgroundPosition: "center top",
//   }}
// />
//
// <div className="project-wrap">
//   <h4>Ariel Pink</h4>
//   <P5Wrapper sketch={sketch}></P5Wrapper>
// </div>

// {data.allMarkdownRemark.edges.map(({ node }, index) => (
//   <div key={node.id} className="project">
//     <Link to={node.fields.slug} className="header">
//       {" "}
//       <h4>{node.frontmatter.title}</h4>
//     </Link>
//     <Link to={node.fields.slug}>
//       <BackgroundImage
//         fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
//         className="image"
//         style={{
//           backgroundPosition: "center top",
//         }}
//       />
//       <P5Wrapper
//         className="canvas"
//         sketch={sketch}
//         color={"blue"}
//       ></P5Wrapper>
//     </Link>
//
//     <p className="excerpt">{node.excerpt}</p>
//   </div>
// ))}

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

  const totalDots = Math.ceil(posts.length / currentPosts)

  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   resizeCanvas()
  //
  // }

  const resizeCanvas = () => {
    if (projectEl.current === null) {
      console.log("projectEl.current === null")
      return
    } else {
      const dimensions = projectEl.current.getBoundingClientRect()
      // console.log(`dimensions: ${dimensions.width}`)
      setCanvasWidth(dimensions.width)
      setCanvasHeight(dimensions.height)
    }
  }

  // const dimensions = () => {
  //   if (typeof projectEl.current.getBoundingClientRect() !== 'undefined' ) {
  //     return
  //   }
  // }

  useEffect(() => {
    resizeCanvas()
  }, [size.width])

  // <div>
  //   <FaAngleDoubleRight
  //     className="next"
  //     color="black"
  //     size={32}
  //     onClick={() => handleNext()}
  //   />
  //   <FaAngleDoubleLeft
  //     className="prev"
  //     color="black"
  //     size={32}
  //     onClick={() => handlePrevious()}
  //   />
  // </div>

  // const currentPosts = data.allMarkdownRemark.edges;
  // console.log(`next ${next}`)
  // console.log(`posts ${JSON.stringify(posts, null, 2)}`);

  //     <button onClick={resizeCanvas}>Focus the input</button>
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
                <P5Wrapper
                  className="canvas"
                  sketch={sketch}
                  i={i}
                  index={index}
                  newWidth={canvasWidth}
                  newHeight={canvasHeight}
                ></P5Wrapper>
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
