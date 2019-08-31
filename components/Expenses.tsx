import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ExpenseProps, ExpensesProps } from '../types/components'
import Expense from './Expense'
import BackToHome from './BackToHome'
import { gts } from '../lib/getThemeStyle'
import { getRelativeTimeString } from '../lib/dateUtils'
import HeadingText from './styles/HeadingText'
import NoItemSection from './styles/NoItemSection'

const StyledExpenses = styled.div`
  .rel-time {
    margin: 100px 0 ${gts('mdMargin')}px;
  }
  .rel-time:first-child {
    margin-top: 0;
  }
`

const Expenses: React.FC<ExpensesProps> = ({ data }) => {
  let timeString = ''

  // when no items are returned from the server
  if (data.length === 0) {
    return (
      <NoItemSection>
        <HeadingText fontSize="1.6rem">You have reached end of the list!</HeadingText>
        <BackToHome />
      </NoItemSection>
    )
  }

  const allExpenseItems = data.map((expense: ExpenseProps) => {
    const newTimeString = getRelativeTimeString(expense.date).replace(/^A\s/i, '1 ')
    const showRelativeTimeString = newTimeString !== timeString
    timeString = newTimeString
    return (
      <Fragment key={expense.id}>
        {showRelativeTimeString && <HeadingText className="rel-time">{newTimeString}</HeadingText>}
        <Link href={`/expense?id=${expense.id}`}>
          <a>
            <Expense {...expense} />
          </a>
        </Link>
      </Fragment>
    )
  })

  return <StyledExpenses>{allExpenseItems}</StyledExpenses>
}

export default Expenses
