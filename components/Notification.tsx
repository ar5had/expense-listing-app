import styled, { keyframes } from 'styled-components'

import HeadingText from './styles/HeadingText'
import { gts } from '../lib/styledComponentsUtils'

interface NotificationProps {
  text: string
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, var(--hideY));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, var(--showY));
  }
`
const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, var(--showY)); 
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 200px)); 
  }
`

const Wrapper = styled.div`
  --showY: 50px;
  --hideY: calc(-100% - 5px);
  pointer-events: none;
  width: auto;
  max-width: ${gts('maxWidth')};
  min-width: 280px;
  padding: 10px;
  box-shadow: ${gts('boxShadow')};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, var(--hideY));
  animation: ${slideIn} 0.4s ease-out forwards, ${slideOut} 0.4s ease-in 1.5s forwards;
  z-index: 2;
  opacity: 0;
  background: ${gts('white')};
  border-radius: ${gts('borderRadius')};
  .heading {
    margin: 0;
    color: ${gts('black')};
    text-align: center;
    line-height: 2;
  }
`

const Notifcation: React.FC<NotificationProps> = ({ text }) => {
  return (
    <Wrapper>
      <HeadingText className="heading">{text}</HeadingText>
    </Wrapper>
  )
}

export default Notifcation
