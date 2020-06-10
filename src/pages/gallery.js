import React from "react"
import SEO from "../components/utilities/seo"
import SimpleReactLightbox from "simple-react-lightbox"

// Components
import ImageGallery from "../components/layout/ImageGallery"
import Container from "../components/utilities/container"

const Gallery = () => {
  return (
    <>
      <SEO title="Gallery" />
      <Container>
        <SimpleReactLightbox>
          <div style={{ zIndex: 210 }}>
            <ImageGallery />
          </div>
        </SimpleReactLightbox>
      </Container>
    </>
  )
}

export default Gallery
