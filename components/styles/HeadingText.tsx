import styled from 'styled-components'

import { gts } from '../../lib/getThemeStyle'

const HeadingText = styled.h5`
  color: ${gts('darkGrey')};
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2;
  letter-spacing: 2px;
  margin-bottom: '1.4rem';
`

export default HeadingText
