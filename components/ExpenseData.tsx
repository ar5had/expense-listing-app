import StaticExpenseFields from './StaticExpenseFields'
import DynamicExpenseFields from './DynamicExpenseFields'
import BackToHome from './BackToHome'
import ExpensePageStyles from './styles/ExpensePageStyles'

interface ExpenseProps {
  [index: string]: any
  id: string
  amount: {
    currency: string
    value: string
  }
  date: string
  merchant: string
  receipt: string
  comment: string
  category: string
  user: {
    first: string
    last: string
    email: string
  }
}

const ExpenseData: React.FC<ExpenseProps> = ({
  user: { first, last, email },
  amount: { currency, value },
  comment,
  category,
  merchant,
  date,
  receipt,
  id
}) => {
  const staticFieldsProps = { first, last, email, currency, value, category, merchant, date }
  const dynamicFieldProps = { receipt, comment, id }

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

export default ExpenseData
