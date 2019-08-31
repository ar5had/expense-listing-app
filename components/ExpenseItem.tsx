import { ExpenseProps } from '../types/components'
import ExpensePageStyles from './styles/ExpensePageStyles'
import BackToHome from './BackToHome'
import StaticExpenseFields from './StaticExpenseFields'
import DynamicExpenseFields from './DynamicExpenseFields'

const ExpenseItem: React.FC<ExpenseProps> = ({
  user: { first, last, email },
  amount: { currency, value },
  comment,
  category,
  merchant,
  date,
  receipts,
  id
}) => {
  const staticFieldsProps = { first, last, email, currency, value, category, merchant, date }
  const dynamicFieldProps = { receipts, comment, id }

  return (
    <ExpensePageStyles>
      <div className="back-btn-row">
        <BackToHome />
      </div>
      <StaticExpenseFields {...staticFieldsProps} />
      <DynamicExpenseFields {...dynamicFieldProps} />
    </ExpensePageStyles>
  )
}

export default ExpenseItem
