import styled from 'styled-components'
import { ImagePreviewProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'
import { useState } from 'react'
import TextButton from './styles/TextButton'
import ImageOverlay from './ImageOverlay'

const ImagePreviewStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'img vb'
    'img db';
  & > img {
    grid-area: img;
  }
  .view-btn {
    grid-area: vb;
  }
  .delete-btn {
    grid-area: db;
  }
`

const Img = styled.img`
  height: 15rem;
  width: 15rem;
  transition: 0.2s;
  border-radius: ${gts('borderRadius')};
  object-fit: cover;
  @media (max-width: ${gts('maxWidth')}) {
    height: 12rem;
    width: 12rem;
  }
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, deleteReceipt }) => {
  const [isOverlayVisible, changeOverlayVisibility] = useState(false)

  const hideOverlay = () => changeOverlayVisibility(false)
  const showOverlay = () => changeOverlayVisibility(true)

  return (
    <ImagePreviewStyles>
      <Img src={src} alt="Receipt" />
      <TextButton type="button" onClick={showOverlay}>
        View Receipt
      </TextButton>
      <ImageOverlay hideOverlay={hideOverlay} src={src} show={isOverlayVisible} />
      <TextButton type="button" onClick={deleteReceipt}>
        Delete Receipt
      </TextButton>
    </ImagePreviewStyles>
  )
}

export default ImagePreview
