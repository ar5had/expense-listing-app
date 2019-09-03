import styled, { keyframes } from 'styled-components'
import { UploadIconProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'

const bounce = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(0px, -24px);
  }
  80% {
    transform: translate(0px, 2px);
  }
  100% {
    transform: translate(0px, 0px); 
  }
`

const UploadIconWrapper = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: ${gts('borderRadius')};
  background-color: ${gts('greyBackground')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    .btn {
      animation: ${bounce} 0.4s ease-in-out forwards;
    }
  }
  @media (max-width: ${gts('maxWidth')}) {
    width: 12rem;
    height: 12rem;
  }
`

const CircledButton = styled.button`
  display: block;
  height: 5rem;
  width: 5rem;
  background-color: ${gts('white')};
  border: 1px dotted transparent;
  border-radius: 50%;
  box-shadow: ${gts('raisedBtnBoxShadow')};
  transition: 0.2s;
  transition-delay: 0.1s;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-color: ${gts('black')};
  }
  .add-icon {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('/static/images/add.svg');
    background-size: 35% 35%;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: ${gts('maxWidth')}) {
    width: 4rem;
    height: 4rem;
    background-size: 50% 50%;
  }
`

const UploadIcon: React.FC<UploadIconProps> = ({ onClick }) => (
  <UploadIconWrapper>
    <CircledButton className="btn" onClick={onClick} type="button">
      <span className="add-icon" />
    </CircledButton>
  </UploadIconWrapper>
)

export default UploadIcon
