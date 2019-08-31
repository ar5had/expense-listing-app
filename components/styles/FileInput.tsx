import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const FileInput = styled.input`
  background: transparent;
  transition: 0.2s;
  border: none;
  border-bottom: solid 1px ${gts('grey')};
  &:focus {
    outline: none;
    border-color: ${gts('black')} !important;
  }
  &::placeholder {
    color: ${gts('darkGrey')};
    opacity: 1;
  }
`

export default FileInput
