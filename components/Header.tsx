import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

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

const StyledHeader = styled.header``

const Header: React.FC = () => <StyledHeader></StyledHeader>

export default Header
