import React from "react"
import { Link } from "gatsby"
import SEO from "../components/utilities/seo"
import { useSpring } from "react-spring"

// Components
import ExploreButton from "../components/UI/explore"
import Overlay from "../components/UI/overlay"
import Slider from "../components/layout/Slider"

const IndexPage = () => {
  const ExploreSpring = useSpring({
    delay: 1000,
    opacity: 1,
    from: {
      opacity: 0,
    },
  })

  return (
    <>
      <SEO title="Home" />
      <Overlay />
      <Slider />
      <Link to="/gallery">
        <ExploreButton style={ExploreSpring}>Explore</ExploreButton>
      </Link>
    </>
  )
}

export default IndexPage
