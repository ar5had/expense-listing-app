import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

import { useTranslation } from '../lib/i18n'
import TextButton from './styles/TextButton'
import { gts } from '../lib/getThemeStyle'

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
`

const Header: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguageToFr = () => i18n.changeLanguage('fr')
  const changeLanguageToEn = () => i18n.changeLanguage('en')

  return (
    <StyledHeader>
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
