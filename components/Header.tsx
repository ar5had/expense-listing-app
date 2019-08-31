import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

// starts loading bar
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

// completes loading bar
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

const StyledHeader = styled.header``

const Header: React.FC = () => <StyledHeader></StyledHeader>

export default Header
