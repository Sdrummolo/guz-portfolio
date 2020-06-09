import styled from "styled-components"

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  /* Fixes slide up animation bug */
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
  }
`

export { GalleryContainer, ImagePreview }
