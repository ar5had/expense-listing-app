import styled from 'styled-components'
import { ImagePreviewProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'

const Img = styled.img`
  height: ${gts('receiptImageDim')};
  width: ${gts('receiptImageDim')};
  border-radius: ${gts('borderRadius')};
  object-fit: cover;
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  return <Img src={src} alt="Receipt" />
}

export default ImagePreview
