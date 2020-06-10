import React from "react"
import SEO from "../components/utilities/seo"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/utilities/container"
import { StyledH1 } from "../components/UI/styled_404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <StyledH1>NOT FOUND</StyledH1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
