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
    grid-template-columns: 1fr;
    grid-templayte-rows: auto auto;
    width: 100%;
    margin-bottom: ${gts('mdMargin')}px;
    grid-gap: 10px;
    & > span,
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
    .save-btn {
      grid-column: 1 / -1;
    }
  }
  .row:empty {
    display: none;
  }
  .error-row > * {
    grid-column: 1 / -1;
  }
`
export default ExpensePageStyles
