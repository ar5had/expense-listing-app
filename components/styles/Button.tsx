import styled from 'styled-components'

import { gts } from '../../lib/styledComponentsUtils'

const Button = styled.button`
  background: transparent;
  transition: 0.2s;
  transition-delay: 0.1s;
  border: none;
  border-radius: ${gts('borderRadius')};
  background: ${gts('black')};
  color: ${gts('white')};
  width: auto;
  padding: 18px 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.3rem;
  opacity: 0.9;
  &:focus {
    outline: none;
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export default Button
