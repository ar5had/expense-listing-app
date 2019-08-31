import styled from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const ExpensePageStyles = styled.div`
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
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
    letter-spacing: 0;
  }
  .amount {
    letter-spacing: 1px;
  }
  .row {
    max-width: 500px;
    margin: auto;
    display: grid;
    width: 100%;
    margin-bottom: ${gts('mdMargin')}px;
    grid-template-columns: 100px 1fr;
    grid-gap: ${gts('mdMargin')}px;
    img {
      width: 40px;
      height: 40px;
    }
    & > span,
    & > input {
      line-height: 1.5;
      padding: 5px;
      font-size: 1.5rem;
    }
    .label {
      color: ${gts('darkGrey')};
      text-align: right;
    }
    .value {
      border-bottom: solid 1px ${gts('grey')};
    }
    .save-btn {
      grid-column: 1 / -1;
    }
  }
  .error-row > * {
    grid-column: 1 / -1;
  }
`
export default ExpensePageStyles
