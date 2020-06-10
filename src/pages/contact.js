import React from "react"
import SEO from "../components/utilities/seo"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/utilities/container"
import SectionTitle from "../components/UI/sectionTitle"
import ContactForm from "../components/layout/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
