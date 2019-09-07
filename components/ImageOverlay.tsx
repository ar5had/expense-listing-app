import styled from 'styled-components'

import TextButton from './styles/TextButton'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

interface ImageOverlayProps {
  src: string
  hideOverlay: () => void
}

const Overlay = styled.div`
  position: fixed;
  background: ${gts('white')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: grid;
  align-items: center;
  justify-items: center;
  div {
    padding: 20px;
    max-width: ${gts('maxWidth')};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    margin-top: 10px;
    max-height: 75vh;
    object-fit: contain;
    width: 100%;
  }
`

const ImageOverlay: React.FC<ImageOverlayProps> = ({ hideOverlay, src }) => {
  const { t } = useTranslation()

  return (
    <Overlay>
      <div>
        <TextButton type="button" className="close-button" onClick={hideOverlay}>
          <b>✕</b> {t('expense:closeBtn')}
        </TextButton>
        <img src={src} alt="Receipt" />
      </div>
    </Overlay>
  )
}
export default ImageOverlay
