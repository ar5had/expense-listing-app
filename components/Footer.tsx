import Link from 'next/link'
import styled from 'styled-components'

import { gts } from '../lib/styledComponentsUtils'
import { useTranslation } from '../lib/i18n'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-column: 1fr;
  justify-content: center;
  grid-gap: 10px;
  margin: ${gts('xxlMargin')}px 0 ${gts('xlMargin')}px;
  img {
    width: 10rem;
  }
  & > a {
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${gts('darkGrey')};
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: ${gts('xxlMargin')}px 0 ${gts('mdMargin')}px;
  }
`

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <a href="http://iamarshad.com/resume.html">
        <img src="/static/images/sign.svg" alt="Arshad" />
      </a>
      <Link href="/credits">
        <a>{t('credits')}</a>
      </Link>
    </StyledFooter>
  )
}
export default Footer
