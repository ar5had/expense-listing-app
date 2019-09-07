import styled from 'styled-components'

import { gts } from '../../lib/getThemeStyle'

const ExpenseStyles = styled.div`
  --dim: 6rem;
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
    box-shadow: ${gts('boxShadow')};
    cursor: pointer;
    outline: none;
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
    --headingFontSize: 2.5rem;
    color: ${gts('darkGrey')};
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1px;
    font-family: ${gts('emFont')};
    span {
      line-height: calc(1.5 * var(--headingFontSize));
    }
  }
  .image {
    width: var(--dim);
    height: var(--dim);
    border-radius: 50%;
    display: block;
    background: ${gts('greyBackground')};
    text-shadow: 1px 1px 3px ${gts('grey')};
    line-height: var(--dim);
    text-align: center;
    font-weight: bold;
    font-family: ${gts('emFont')};
    color: ${gts('white')};
    font-size: calc(var(--dim) / 2);
  }
  h3 {
    margin: 0 0 10px;
    line-height: 1.5;
    font-family: ${gts('emFont')};
    font-size: 2.5rem;
    letter-spacing: 1px;
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
    font-size: 1.3rem;
    margin: 0;
    color: ${gts('lightBlack')};
    border-left: solid 5px ${gts('grey')};
    padding: 5px 15px 10px;
    line-height: 1.5;
    grid-column: 2 / -1;
  }
  @media (max-width: ${gts('maxWidth')}) {
    h3 {
      font-size: 2rem;
    }
    .amount {
      --headingFontSize: 2rem;
    }
    blockquote {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin-bottom: ${gts('mdMargin')}px;
    border-radius: 0;
  }
  /* for extra small mobile screens */
  @media (max-width: 320px) {
    .image {
      grid-column: 1 / -1;
      margin: auto;
    }
    .name-currency-wrapper {
      grid-column: 1 / -1;
    }
  }
`
export default ExpenseStyles
