import { Fragment, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ExpenseProps, ExpensesProps } from '../types/components'
import Expense from './Expense'
import BackToHome from './BackToHome'
import { gts } from '../lib/getThemeStyle'
import { getRelativeTimeString } from '../lib/dateUtils'
import HeadingText from './styles/HeadingText'
import NoItemSection from './styles/NoItemSection'
import FilterExpense from './FilterExpense'

const StyledExpenses = styled.div`
  .rel-time {
    margin: 100px 0 ${gts('mdMargin')}px;
  }
  .rel-time:first-child {
    margin-top: 0;
  }
`

const Expenses: React.FC<ExpensesProps> = ({ data }) => {
  const [filterText, changeFilterText] = useState('')
  const [filterType, changeFilterType] = useState('name')

  let timeString = ''

  // when there are no expense items
  if (data.length === 0) {
    return (
      <NoItemSection>
        <HeadingText fontSize="1.6rem">You have reached end of the list!</HeadingText>
        <BackToHome />
      </NoItemSection>
    )
  }

  const filteredData = data.filter((expense: ExpenseProps) => {
    const name = `${expense.user.first} ${expense.user.last}`
    const regex = new RegExp(filterText, 'gi')
    if (filterType === 'name') {
      return regex.test(name)
    } else {
      return regex.test(expense[filterType])
    }
  })

  const allExpenseItems = filteredData.map((expense: ExpenseProps) => {
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

  return (
    <StyledExpenses>
      <FilterExpense
        filterText={filterText}
        filterType={filterType}
        changeFilterText={changeFilterText}
        changeFilterType={changeFilterType}
      />
      {allExpenseItems}
    </StyledExpenses>
  )
}

export default Expenses
