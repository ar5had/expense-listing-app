import styled from 'styled-components'
import Link from 'next/link'
import { gts } from '../lib/getThemeStyle'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  grid-gap: 10px;
  margin: ${gts('xlMargin')}px 0;
  align-items: center;
  align-content: start;
  & > a {
    font-size: 1rem;
    line-height: 1.2;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${gts('darkGrey')};
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: ${gts('mdMargin')}px 0 ${gts('mdMargin')}px;
  }
`

const Img = styled.img`
  background: ${gts('black')};
  width: 9rem;
`

const Footer: React.FC = () => (
  <StyledFooter>
    <a href="http://iamarshad.com/resume.html">
      <Img src="/static/images/sign.png" alt="Arshad" />
    </a>
    <Link href="/credits">
      <a>Credits</a>
    </Link>
  </StyledFooter>
)
export default Footer
