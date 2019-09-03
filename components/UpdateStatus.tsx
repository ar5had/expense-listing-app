import styled, { keyframes } from 'styled-components'
import HeadingText from './styles/HeadingText'
import { UpdateStatusProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'

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

const Status = styled.div`
  --showY: 50px;
  --hideY: calc(-100% - 5px);
  pointer-events: none;
  width: auto;
  max-width: ${gts('maxWidth')};
  min-width: 250px;
  padding: 10px;
  box-shadow: ${gts('btnBoxShadow')};
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

const UpdateStatus: React.FC<UpdateStatusProps> = ({ text }) => {
  return (
    <Status>
      <HeadingText className="heading">{text}</HeadingText>
    </Status>
  )
}

export default UpdateStatus
