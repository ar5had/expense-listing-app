import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ExpenseProps, ExpensesProps } from '../types/components'
import Expense from './Expense'
import { gts } from '../lib/getThemeStyle'
import getRelativeTimeString from '../lib/relativeTime'
import HeadingText from './styles/HeadingText'

const StyledExpenses = styled.div`
  .rel-time {
    margin: 100px 0 ${gts('mdMargin')}px;
  }
  .rel-time:first-child {
    margin-top: 0;
  }
`

const NoItemsHeading = styled.div`
  text-align: center;
  margin-bottom: ${gts('lgMargin')}px;
  h5 {
    margin-top: 25vh;
    text-align: center;
  }

  a {
    letter-spacing: 2px;
    text-transform: uppercase;
    span {
      line-height: 2rem;
      margin-left: 5px;
    }

    span,
    svg {
      vertical-align: middle;
    }
  }

  svg {
    fill: ${gts('black')};
    height: 24px;
    width: 24px;
  }
`

const Expenses: React.FC<ExpensesProps> = ({ data }) => {
  let timeString = ''

  // when no items are returned from the server
  if (data.length === 0) {
    return (
      <NoItemsHeading>
        <HeadingText>You have reached end of the list!</HeadingText>
        <Link href="/">
          <a>
            <svg>
              <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
            <span>Back to Home</span>
          </a>
        </Link>
      </NoItemsHeading>
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
