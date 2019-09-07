import styled, { ThemeProvider } from 'styled-components'

import Meta from './Meta'
import Header from './Header'
import { theme } from './styles/theme'
import GlobalStyle from './styles/globalStyle'
import { gts } from '../lib/getThemeStyle'

const StyledPage = styled.div`
  background: ${gts('white')};
  color: ${gts('black')};
  padding: ${gts('smMargin')}px;
  min-height: calc(100vh - 40px);
  border: solid ${gts('smMargin')}px ${gts('greyBackground')};
  @media (max-width: ${gts('maxWidth')}) {
    padding: 0;
    border: none;
    .hide-sm {
      display: none;
    }
    min-height: 0;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    .hide-xs {
      display: none;
    }
  }
`

const Inner = styled.div`
  max-width: ${gts('maxWidth')};
  margin: 0 auto;
`

const Page: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <GlobalStyle />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
)

export default Page
