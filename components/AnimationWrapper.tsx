import { ReactNode } from 'react'
import styled from 'styled-components'
import CSSTranstion from 'react-transition-group/CSSTransition'

interface AnimationWrapperProps {
  children: ReactNode
  hasContentLoaded: boolean
}

const ContentWrapper = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-enter-done {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, hasContentLoaded }) => (
  <CSSTranstion classNames="fade" timeout={200} in={hasContentLoaded} appear={true}>
    <ContentWrapper>{children}</ContentWrapper>
  </CSSTranstion>
)

export default AnimationWrapper
