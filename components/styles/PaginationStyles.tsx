import styled from 'styled-components'

import { gts } from '../../lib/getThemeStyle'

const PaginationStyles = styled.div`
  text-align: center;
  display: grid;
  text-transform: uppercase;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: stretch;
  align-content: center;
  margin: 0;
  letter-spacing: 2px;
  font-size: 1.3rem;
  color: ${gts('darkGrey')};
  background: ${gts('white')};
  border-radius: ${gts('borderRadius')};
  border: solid 1px ${gts('grey')};
  & > * {
    margin: 0;
    transition: 0.2s;
    transition-delay: 0.1s;
    padding: 15px;
    color: ${gts('darkGrey')};
    border-right: 1px solid ${gts('grey')};
    line-height: 1.5;
    &:last-child {
      border-right: 0;
    }
  }
  & > a:hover {
    color: ${gts('black')};
    box-shadow: ${gts('btnBoxShadow')};
    background: ${gts('white')};
    border-color: transparent;
  }
  & > a:focus {
    color: ${gts('black')};
  }
  a:first-child {
    border-radius: ${gts('borderRadius')} 0 0 ${gts('borderRadius')};
    &:hover {
      transform: translateX(-4px) scale(1.1);
    }
  }
  a:last-child {
    border-radius: 0 ${gts('borderRadius')} ${gts('borderRadius')} 0;
    &:hover {
      transform: translateX(4px) scale(1.1);
    }
  }
  a[aria-disabled='true'] {
    color: ${gts('grey')};
    pointer-events: none;
  }
  @media (max-width: ${gts('maxWidth')}) {
    grid-template-columns: 1fr 1fr 1fr;
    & > * {
      padding: 15px 10px;
    }
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default PaginationStyles
