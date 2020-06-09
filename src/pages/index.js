import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/utilities/seo"

// Components
import ExploreButton from "../components/UI/explore"
import Overlay from "../components/UI/overlay"
import Slider from "../components/layout/Slider"

const IndexPage = () => {
  return (
    <Layout overflowY>
      <SEO title="Home" />
      <Overlay />
      <Slider />
      <Link to="/gallery">
        <ExploreButton>Explore</ExploreButton>
      </Link>
    </Layout>
  )
}

export default IndexPage
