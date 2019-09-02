import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

interface HeadingProps {
  fontSize?: string;
  color?: string;
}

const Heading =
  styled.h1 <
  HeadingProps >
  `
  font-family: ${gts('emFont')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '4rem')};
  color: ${({ color }) => (color ? color : gts('black'))};
  text-align: center;
  margin: 0;
  line-height: 1.5;
`

export default Heading
