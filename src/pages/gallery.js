import React from "react"
import SEO from "../components/utilities/seo"
import SimpleReactLightbox from "simple-react-lightbox"

// Components
import Layout from "../components/layout/layout"
import ImageGallery from "../components/layout/ImageGallery"
import Container from "../components/utilities/container"

const Gallery = () => {
  return (
    <Layout zIndex={0}>
      <SEO title="Gallery" />
      <Container>
        <SimpleReactLightbox>
          <ImageGallery />
        </SimpleReactLightbox>
      </Container>
    </Layout>
  )
}

export default Gallery
