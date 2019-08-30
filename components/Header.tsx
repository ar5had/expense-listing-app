import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

const StyledHeader = styled.header``

const Header: React.FC = () => <StyledHeader></StyledHeader>

export default Header
