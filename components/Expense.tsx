import styled from 'styled-components'
import { ExpenseProps } from './types'
import getSymbolFromCurrency from '../lib/currencyMap'
import ExpenseStyles from './styles/ExpenseStyles'

const Expense: React.FC<ExpenseProps> = (props) => {
  const {
    amount: { currency, value },
    comment,
    user: { first, last },
    merchant
  } = props

  return (
    <ExpenseStyles>
      <div className="grid">
        <span className="image">{first[0]}</span>
        <div className="name-currency-wrapper">
          <div>
            <h3 className="name">
              {first} {last}
            </h3>
            <p className="merchant">{merchant}</p>
          </div>
          <div className="amount">
            <span>{getSymbolFromCurrency(currency)}</span>
            <span>{value}</span>
          </div>
        </div>
        {comment && (
          <>
            <span />
            <div>
              <blockquote>{comment}</blockquote>
            </div>
          </>
        )}
      </div>
    </ExpenseStyles>
  )
}
export default Expense
