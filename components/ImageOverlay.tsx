import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import TextButton from './styles/TextButton'
import { ImageOverlayProps } from '../types/components'
import { useEffect, useState } from 'react'

const Overlay =
  styled.div <
  { show: boolean, zindex: number } >
  `
  transition: .3s ease-in-out;
  position: fixed;
  background: ${gts('white')};
  top: 0;
  left: 0;
  z-index: ${({ zindex }) => (zindex ? zindex : -1)};
  right: 0;
  bottom: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 20px;
  div {
    transition: .3s ease-in-out;
    background: ${gts('white')};
    padding: 20px;
    max-width: ${gts('maxWidth')};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100px)')};
    opacity: ${({ show }) => (show ? '1' : '0')};
  }
  img {
    margin-top: 10px;
    max-height: calc(100vh - 200px);
    object-fit: contain;
    width: 100%;
  }
`

const ImageOverlay: React.FC<ImageOverlayProps> = ({ hideOverlay, src, show }) => {
  const [zindex, setZindex] = useState(-1)

  useEffect(() => {
    let timeoutId: number | undefined
    if (!show) {
      timeoutId = setTimeout(() => {
        setZindex(-1)
      }, 400)
    } else {
      setZindex(2)
    }

    return () => clearTimeout(timeoutId)
  }, [show])

  return (
    <Overlay show={show} zindex={zindex}>
      <div>
        <TextButton type="button" className="close-button" onClick={hideOverlay}>
          <b>✕</b> close
        </TextButton>
        <img src={src} alt="Receipt" />
      </div>
    </Overlay>
  )
}
export default ImageOverlay
