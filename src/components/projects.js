import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'
import useWindowSize from '../helpers/useWindowSize'

const Projects = ({data, className, id}) => {
  const size = useWindowSize()
  const dotCount = 3
  const posts = data.allMarkdownRemark.edges

  const [index, setIndex] = useState(0)
  const [dotIndex, setDotIndex] = useState(0)

  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const projectEl = useRef(null)
  const initialPosts =
    size.width >= 768 ? posts.slice(index, index + dotCount) : posts
  const [currentPosts, setCurrentPosts] = useState(initialPosts)

  // const length = posts.length - 1
  const handleDot = i => {
    setDotIndex(Math.floor(i / totalDots))
    setIndex(i)
    setCurrentPosts(posts.slice(i, i + dotCount))
  }

  let array = [{}, {}, {}]

  if (size.width >= 768) {
    // setCurrentPosts(posts.slice(index, index + dotCount))
  }

  const totalDots = Math.ceil(posts.length / dotCount)

  const resizeCanvas = () => {
    if (projectEl.current === null) {
      console.log('projectEl.current === null')
      return
    } else {
      const dimensions = projectEl.current.getBoundingClientRect()
      setCanvasWidth(dimensions.width)
      setCanvasHeight(dimensions.height)
    }
  }

  const currentPostsMapped = currentPosts.map(({node}, i) => (
    <div ref={projectEl} key={node.id} className="project">
      <Link to={node.fields.slug} className="header">
        {' '}
        <h4>{node.frontmatter.title}</h4>
      </Link>
      <Link to={node.fields.slug}>
        <BackgroundImage
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          className="image"
          style={{
            backgroundPosition: 'center top',
          }}
        />
        {typeof window !== 'undefined' && P5Wrapper && (
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
  ))

  const dots = (
    <div className="dots">
      {array.map(({node}, i) =>
        dotIndex === i ? (
          <div
            key={i}
            className="dot active"
            onClick={() => handleDot(i * totalDots)}
          ></div>
        ) : (
          <div
            key={i}
            className="dot"
            onClick={() => handleDot(i * totalDots)}
          ></div>
        )
      )}
    </div>
  )

  useEffect(() => {
    resizeCanvas()
    size.width >= 768 ? setCurrentPosts(posts.slice(index, index + dotCount)) : setCurrentPosts(posts)
  }, [size.width, index, posts])

  return (
    <div className={className} id={id}>
      <div className="container">
        <h3>Portfolio</h3>
        <div>Click on a blob to explore a project.</div>

        <div className="projects-wrap">{currentPostsMapped}</div>
        {size.width > 768 ? dots : ''}
      </div>
    </div>
  )
}

export default Projects
