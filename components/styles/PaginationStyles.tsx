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
  box-shadow: ${gts('insetBoxShadow')};
  border-radius: ${gts('borderRadius')};
  align-items: stretch;
  & > * {
    margin: 0;
    transition: 0.2s;
    transition-delay: 0.1s;
    padding: 15px 20px;
    border-right: 1px solid ${gts('grey')};
    line-height: 1.5;
    &:last-child {
      border-right: 0;
    }
  }
  & > a:hover,
  & > a:focus {
    color: ${gts('black')};
    box-shadow: ${gts('btnBoxShadow')};
    background: white;
    border-color: transparent;
  }
  a {
    color: ${gts('darkGrey')};
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export default PaginationStyles
