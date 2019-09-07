import { useState } from 'react'
import styled from 'styled-components'

import TextButton from './styles/TextButton'
import ImageOverlay from './ImageOverlay'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

interface ImagePreviewProps {
  src: string
  deleteReceipt: () => void
}

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
  border-radius: ${gts('borderRadius')};
  object-fit: cover;
  @media (max-width: ${gts('maxWidth')}) {
    height: 12rem;
    width: 12rem;
  }
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, deleteReceipt }) => {
  const { t } = useTranslation()
  const [isOverlayVisible, changeOverlayVisibility] = useState(false)

  const hideOverlay = () => changeOverlayVisibility(false)
  const showOverlay = () => changeOverlayVisibility(true)

  return (
    <ImagePreviewStyles>
      <Img src={src} alt="Receipt" />
      <TextButton type="button" onClick={showOverlay}>
        {t('expense:viewReceiptBtn')}
      </TextButton>
      {isOverlayVisible && <ImageOverlay hideOverlay={hideOverlay} src={src} />}
      <TextButton type="button" onClick={deleteReceipt}>
        {t('expense:deleteReceiptBtn')}
      </TextButton>
    </ImagePreviewStyles>
  )
}

export default ImagePreview
