import React from "react"
import SEO from "../components/utilities/seo"
import SimpleReactLightbox from "simple-react-lightbox"

// Components
import ImageGallery from "../components/layout/ImageGallery"
import Container from "../components/utilities/container"
import SectionTitle from "../components/UI/sectionTitle"

const Gallery = () => {
  return (
    <>
      <SEO title="Gallery" />
      <Container>
        <SectionTitle>Gallery</SectionTitle>
        <SimpleReactLightbox>
          <ImageGallery />
        </SimpleReactLightbox>
      </Container>
    </>
  )
}

export default Gallery
