import React from "react"
import SEO from "../components/utilities/seo"

// Components
import Container from "../components/utilities/container"
import SectionTitle from "../components/UI/sectionTitle"
import ContactForm from "../components/layout/ContactForm"

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <ContactForm />
      </Container>
    </>
  )
}

export default Contact
