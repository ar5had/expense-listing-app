import styled from 'styled-components'

import { gts } from '../../lib/styledComponentsUtils'

const Input = styled.input`
  background: transparent;
  transition: 0.2s;
  border: none;
  border-bottom: solid 1px ${gts('grey')};
  &:focus {
    outline: none;
    border-color: ${gts('black')};
  }
  &::placeholder {
    color: ${gts('darkGrey')};
    opacity: 1;
  }
`

export default Input
