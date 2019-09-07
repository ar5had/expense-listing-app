import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

import { useTranslation } from '../lib/i18n'
import TextButton from './styles/TextButton'
import { gts } from '../lib/styledComponentsUtils'

// starts progress bar
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

// finish progress bar
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

// finish progress bar
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

const StyledHeader = styled.header`
  max-width: ${gts('maxWidth')};
  margin: auto;
  text-align: right;
  span {
    color: ${gts('darkGrey')};
    text-transform: uppercase;
    padding: 0 5px;
    letter-spacing: 2px;
  }
  margin-bottom: ${gts('xlMargin')}px;
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin-bottom: ${gts('mdMargin')}px;
  }
`

const Header: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguageToFr = () => i18n.changeLanguage('fr')
  const changeLanguageToEn = () => i18n.changeLanguage('en')

  return (
    <StyledHeader>
      <span>language:</span>
      <TextButton onClick={changeLanguageToEn} type="button">
        en
      </TextButton>
      <TextButton onClick={changeLanguageToFr} type="button">
        fr
      </TextButton>
    </StyledHeader>
  )
}

export default Header
