import React from "react"
import SEO from "../components/utilities/seo"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/utilities/container"
import SectionTitle from "../components/UI/sectionTitle"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <SectionTitle>About</SectionTitle>
      </Container>
    </Layout>
  )
}

export default About
