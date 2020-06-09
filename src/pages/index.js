import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/utilities/seo"

// Components
import ExploreButton from "../components/UI/explore"
import Overlay from "../components/UI/overlay"
import Slider from "../components/layout/Slider"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Overlay />
      <Slider />
      <ExploreButton>Explore</ExploreButton>
    </Layout>
  )
}

export default IndexPage
