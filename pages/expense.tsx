import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'

import AnimationWrapper from '../components/AnimationWrapper'
import ExpensePageContent from '../components/ExpensePageContent'
import PageNotFound from '../components/PageNotFound'
import { I18nPage } from '../lib/i18n'

interface ExpenseProps {
  query: {
    id: string
  }
}

const EXPENSE_QUERY = gql`
  query EXPENSE_QUERY($id: ID!) {
    expense(id: $id) {
      id
      amount {
        currency
        value
      }
      date
      merchant
      receipt
      comment
      category
      user {
        first
        last
        email
      }
    }
  }
`

const Expense: I18nPage<ExpenseProps> = ({ query: { id } }) => (
  <Query query={EXPENSE_QUERY} variables={{ id }}>
    {({ data, error, loading }: QueryResult) => {
      if (loading) {
        return null
      }

      if (error) {
        return <p>Error: {error.message}</p>
      }

      if (data.expense) {
        return (
          <AnimationWrapper hasContentLoaded={!loading}>
            <ExpensePageContent expenseData={data.expense} />
          </AnimationWrapper>
        )
      }

      return <PageNotFound />
    }}
  </Query>
)

Expense.getInitialProps = async () => ({
  namespacesRequired: ['expense', 'common']
})

export default Expense
export { EXPENSE_QUERY }
