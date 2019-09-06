import styled from 'styled-components'

import { ExpenseProps, ExpensesProps } from '../types/components'
import Expense from './Expense'
import { gts } from '../lib/getThemeStyle'
import { getRelativeTimeString } from '../lib/dateUtils'
import HeadingText from './styles/HeadingText'
import NoItemSection from './styles/NoItemSection'
import { useTranslation, Link } from '../lib/i18n'

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
  const {
    t,
    i18n: { language }
  } = useTranslation()
  let timeString = ''

  // when there are no expense items
  if (data.length === 0) {
    return (
      <NoItemSection>
        <HeadingText>{t('common:ExpenseNotFoundText')}!</HeadingText>
      </NoItemSection>
    )
  }

  const allExpenseItems = data.map((expense: ExpenseProps) => {
    const newTimeString = getRelativeTimeString(expense.date, language).replace(/^A\s/i, '1 ')
    const showRelativeTimeString = newTimeString !== timeString
    timeString = newTimeString
    return (
      <div key={expense.id}>
        {showRelativeTimeString && <HeadingText className="rel-time">{newTimeString}</HeadingText>}
        <Link href={`/expense?id=${expense.id}`}>
          <a>
            <Expense {...expense} />
          </a>
        </Link>
      </div>
    )
  })

  return <StyledExpenses>{allExpenseItems}</StyledExpenses>
}

export default Expenses
