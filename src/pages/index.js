import React from "react"
import { Link } from "gatsby"
import SEO from "../components/utilities/seo"
import { useSpring } from "react-spring"

// Components
import Layout from "../components/layout/layout"
import ExploreButton from "../components/UI/explore"
import Overlay from "../components/UI/overlay"
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
    <Layout>
      <SEO title="Home" />
      <Overlay />
      <Slider />
      <Link to="/gallery">
        <ExploreButton style={ExploreSpring}>Explore</ExploreButton>
      </Link>
    </Layout>
  )
}

export default IndexPage
