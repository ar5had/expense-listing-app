import styled from 'styled-components'
import { ImagePreviewProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'
import { useState } from 'react'
import TextButton from './styles/TextButton'

const ImagePreviewStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'img vb'
    'img db';
  img {
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
  height: ${gts('receiptImageDim')};
  width: ${gts('receiptImageDim')};
  border-radius: ${gts('borderRadius')};
  object-fit: cover;
`

const Overlay = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 20px;
  div {
    background: ${gts('white')};
    box-shadow: ${gts('boxShadow')};
    padding: 20px;
    max-width: ${gts('maxWidth')};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  b {
    font-weight: bold;
  }
  img {
    margin-top: 10px;
    max-height: calc(100vh - 200px);
    object-fit: contain;
    width: 100%;
    &:after {
      content: 'view';
      text-transform: uppercase;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ffffffaa;
      display: grid;
      justify-items: center;
      align-items: center;
    }
  }
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, deleteReceipt }) => {
  const [overlay, changeOverlayVisibility] = useState(false)

  const hideOverlay = () => changeOverlayVisibility(false)
  const showOverlay = () => changeOverlayVisibility(true)

  return (
    <ImagePreviewStyles>
      {overlay && (
        <Overlay>
          <div>
            <TextButton className="close-button" onClick={hideOverlay}>
              <b>✕</b> close
            </TextButton>
            <img src={src} alt="Receipt" />
          </div>
        </Overlay>
      )}
      <Img src={src} alt="Receipt" />
      <TextButton type="button" onClick={showOverlay}>
        View Receipt
      </TextButton>
      <TextButton type="button" onClick={deleteReceipt}>
        Delete Receipt
      </TextButton>
    </ImagePreviewStyles>
  )
}

export default ImagePreview
