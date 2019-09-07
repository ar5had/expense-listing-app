import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const ExpensePageStyles = styled.div`
  margin: 0 0 ${gts('xlMargin')}px;
  .back-btn-row {
    text-align: center;
    margin-bottom: ${gts('xlMargin')}px;
  }
  .currency-row {
    margin-bottom: ${gts('lgMargin')}px;
  }
  .time {
    text-align: center;
    margin-top: calc(${gts('xsMargin')}px / 2);
  }
  .amount {
    text-align: center;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: auto auto ${gts('mdMargin')}px auto;
    grid-gap: 10px;
    & > span,
    & > label,
    & > input {
      line-height: 1.5;
      padding: 5px;
      font-size: 1.5rem;
    }
    .label {
      color: ${gts('darkGrey')};
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .value {
      border-bottom: solid 1px ${gts('grey')};
    }
    @media (max-width: ${gts('maxWidth')}) {
      max-width: 1000%;
      margin: 0 0 ${gts('mdMargin')}px 0;
    }
  }
  .row:empty {
    display: none;
  }
  button[type='submit'] {
    width: 100%;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: ${gts('smMargin')}px 0 ${gts('mdMargin')}px;
    .back-btn-row,
    .currency-row {
      margin-bottom: ${gts('mdMargin')}px;
    }
  }
`
export default ExpensePageStyles
