import styled, { keyframes } from 'styled-components'
import { CardWithBtnProps } from '../types/components'
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

const CardWithBtnWrapper = styled.div`
  height: ${gts('receiptImageDim')};
  width: ${gts('receiptImageDim')};
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
`

const CircledButton = styled.span`
  display: block;
  height: 5rem;
  width: 5rem;
  background-color: ${gts('white')};
  border: none;
  border-radius: 50%;
  box-shadow: ${gts('raisedBtnBoxShadow')};
  transition: 0.2s;
  transition-delay: 0.1s;
  &:hover {
    cursor: pointer;
  }
  .add-icon {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('/static/images/add.svg');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const CardWithBtn: React.FC<CardWithBtnProps> = ({ onClick }) => (
  <CardWithBtnWrapper>
    <CircledButton className="btn" onClick={onClick}>
      <span className="add-icon" />
    </CircledButton>
  </CardWithBtnWrapper>
)

export default CardWithBtn
