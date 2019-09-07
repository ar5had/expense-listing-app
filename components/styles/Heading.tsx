import styled from 'styled-components'

import { gts } from '../../lib/styledComponentsUtils'

const Heading = styled.h1`
  font-family: ${gts('emFont')};
  font-size: 4rem;
  margin: 0;
  line-height: 1.5;
  letter-spacing: 1px;
  @media (max-width: ${gts('maxWidth')}) {
    font-size: 3rem;
  }
`

export default Heading
