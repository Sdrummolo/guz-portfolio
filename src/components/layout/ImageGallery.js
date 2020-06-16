import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"
import { SRLWrapper } from "simple-react-lightbox"

// Components
import { GalleryContainer, ImagePreview } from "../UI/styled_ImageGallery"
import PortfolioContext from "../../context/PortfolioContext"

const options = {
  settings: {
    disablePanzoom: true,
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
  caption: {
    showCaption: false,
  },
  progressBar: {
    showProgressBar: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
}

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 1000) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const { setIsLightboxOpen } = useContext(PortfolioContext)

  useEffect(() => {
    Aos.init({ duration: 700 })
  }, [])

  const callbacks = {
    onLightboxOpened: () => setIsLightboxOpen(true),
    onLightboxClosed: () => setIsLightboxOpen(false),
  }

  return (
    <SRLWrapper options={options} callbacks={callbacks}>
      <GalleryContainer>
        {data.allFile.edges.map((image, i) => {
          return (
            <ImagePreview data-aos="fade-up" key={i}>
              <Img fluid={image.node.childImageSharp.fluid} />
            </ImagePreview>
          )
        })}
      </GalleryContainer>
    </SRLWrapper>
  )
}

export default ImageGallery
