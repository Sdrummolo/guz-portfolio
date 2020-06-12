import React from "react"
import { Link } from "gatsby"
import SEO from "../components/utilities/seo"
import { useSpring } from "react-spring"

// Components
import ExploreButton from "../components/UI/explore"
import Slider from "../components/layout/Slider"

const IndexPage = () => {
  const ExploreSpring = useSpring({
    config: { duration: 700 },
    delay: 1000,
    opacity: 1,
    from: {
      opacity: 0,
    },
  })

  return (
    <>
      <SEO title="Home" />
      <Slider />
      <Link to="/gallery">
        <ExploreButton style={ExploreSpring}>Gallery</ExploreButton>
      </Link>
    </>
  )
}

export default IndexPage
