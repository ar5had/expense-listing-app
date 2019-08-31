import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Meta from './Meta'
import { theme } from './styles/theme'
import GlobalStyle from './styles/globalStyle'
import { gts } from '../lib/getThemeStyle'

const StyledPage = styled.div`
  background: white;
  color: ${gts('black')};
  padding: ${gts('smMargin')}px;
  min-height: calc(100vh - 40px);
  border: solid ${gts('smMargin')}px ${gts('grey')};
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
