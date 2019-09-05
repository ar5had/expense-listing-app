import styled from 'styled-components'

import { gts } from '../lib/getThemeStyle'
import { useTranslation, Link } from '../lib/i18n'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  grid-gap: 10px;
  margin: ${gts('xxlMargin')}px 0 ${gts('xlMargin')}px;
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
    margin: ${gts('xxlMargin')}px 0 ${gts('mdMargin')}px;
  }
`

const Img = styled.img`
  width: 10rem;
`

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <a href="http://iamarshad.com/resume.html">
        <Img src="/static/images/sign.svg" alt="Arshad" />
      </a>
      <Link href="/credits">
        <a>{t('credits')}</a>
      </Link>
    </StyledFooter>
  )
}
export default Footer
