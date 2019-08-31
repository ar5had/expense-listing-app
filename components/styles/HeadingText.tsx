import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const HeadingText = styled.h5<{ fontSize?: string, marginBottom?: string } >`
  color: ${gts('darkGrey')};
  font-weight: normal;
  text-transform: uppercase;
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.4rem'};
  line-height: 2;
  letter-spacing: 2px;
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '1.4rem'};
`

export default HeadingText
