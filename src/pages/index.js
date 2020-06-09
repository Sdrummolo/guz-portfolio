import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/utilities/seo"
import Slider from "../components/layout/Slider"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Slider />
    </Layout>
  )
}

export default IndexPage
