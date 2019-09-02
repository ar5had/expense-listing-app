import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const ExpenseStyles = styled.div`
  --dim: 60px;
  margin-bottom: ${gts('lgMargin')}px;
  overflow: visible;
  padding: ${gts('smMargin')}px;
  border-radius: ${gts('borderRadius')};
  border: none;
  transition: 0.2s;
  transition-delay: 0.1s;
  word-wrap: break-word;
  &:hover,
  a:focus > & {
    box-shadow: ${gts('btnBoxShadow')};
    cursor: pointer;
    transform: translateY(-5px);
    .image {
      box-shadow: none;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${gts('smMargin')}px;
  }
  .amount {
    color: ${gts('darkGrey')};
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1px;
    font-family: ${gts('emFont')};
  }
  .image {
    width: var(--dim);
    height: var(--dim);
    border-radius: 50%;
    display: block;
    background: ${gts('grey')};
    line-height: var(--dim);
    text-align: center;
    font-weight: bold;
    font-family: ${gts('emFont')};
    color: ${gts('white')};
    font-size: calc(var(--dim) / 2);
    transition: 0.2s;
    transition-delay: 0.1s;
    box-shadow: ${gts('insetBoxShadow')};
  }
  h3 {
    margin: 0 0 10px;
    line-height: 1.5;
    font-family: ${gts('emFont')};
    font-size: 2.5rem;
  }
  .merchant {
    margin: 0;
    font-size: 1.4rem;
  }
  .name-currency-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: ${gts('smMargin')}px;
  }
  blockquote {
    margin: 0;
    display: flex;
    color: ${gts('lightBlack')};
    flex-direction: column;
    border-left: solid 4px ${gts('grey')};
    padding: 5px 15px 10px;
    line-height: 1.5;
    small {
      margin-top: 10px;
      font-weight: bold;
    }
  }
`
export default ExpenseStyles
