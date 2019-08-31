import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const Heading = styled.h1<{ fontSize?: string, color?: string } >`
  font-family: ${gts('emFont')};
  font-size: ${({fontSize}) => fontSize ? fontSize : '4rem'};
  color: ${({color}) => color ? color : gts('black')};
  text-align: center;
  margin: 0;
  line-height: 1.5;
`

export default Heading
