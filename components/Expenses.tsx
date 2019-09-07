import Link from 'next/link'
import styled from 'styled-components'

import ExpenseItem from './ExpenseItem'
import HeadingText from './styles/HeadingText'
import { gts } from '../lib/styledComponentsUtils'
import { getRelativeTimeString } from '../lib/dateUtils'
import { useTranslation } from '../lib/i18n'
import { ExpenseProps } from './types/common'

interface ExpensesProps {
  data: ExpenseProps[]
}

const StyledExpenses = styled.div`
  .rel-time {
    margin: ${gts('lgMargin')}px 0 ${gts('mdMargin')}px;
  }
  .rel-time:first-child {
    margin-top: 0;
  }
  a {
    display: block;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: 0 -20px;
    .rel-time {
      margin: ${gts('mdMargin')}px 0 ${gts('smMargin')}px;
      padding: 0 20px;
    }
  }
`

const Expenses: React.FC<ExpensesProps> = ({ data }) => {
  const { i18n } = useTranslation()
  let timeString = ''

  // when there aren't any expense item
  if (!data.length) {
    return null
  }

  const allExpenseItems = data.map((expense: ExpenseProps) => {
    const newTimeString = getRelativeTimeString(expense.date, i18n.language)
    const showRelativeTimeString = newTimeString !== timeString

    timeString = newTimeString

    return (
      <div key={expense.id}>
        {showRelativeTimeString && <HeadingText className="rel-time">{newTimeString}</HeadingText>}
        <Link href={`/expense?id=${expense.id}`}>
          <a>
            <ExpenseItem {...expense} />
          </a>
        </Link>
      </div>
    )
  })

  return <StyledExpenses>{allExpenseItems}</StyledExpenses>
}

export default Expenses
