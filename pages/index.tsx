import gql from 'graphql-tag'
import { NextPage } from 'next'
import { Query, QueryResult } from 'react-apollo'
import Expenses from '../components/Expenses'
import IndexHeader from '../components/IndexHeader'
import Pagination from '../components/Pagination'
import ExpenseFilter from '../components/ExpenseFilter'
import { objectHasText } from '../lib/filterUtils'
import { ExpenseProps } from '../types/components'

interface HomeProps {
  query: {
    limit: string,
    offset: string,
    search: string
  };
}

const ALL_EXPENSES_QUERY = gql`
  query ALL_EXPENSES_QUERY($limit: Int = 10, $offset: Int = 0) {
    expenses(limit: $limit, offset: $offset) {
      data {
        id
        amount {
          value
          currency
        }
        date
        merchant
        comment
        user {
          first
          last
        }
      }
      total
    }
  }
`

const Home: NextPage<HomeProps> = ({ query }) => {
  const perPage = parseInt(query.limit, 10) || 10
  const offset = parseInt(query.offset, 10) || 0
  const filterText = query.search || ''

  const filterData = (data: ExpenseProps[]) =>
    data.filter(({ merchant, comment, user: { first, last } }) =>
      objectHasText(
        { merchant, comment, firstLastName: `${first} ${last}`, lastFirstName: `${last} ${first}` },
        filterText
      )
    )

  return (
    <div>
      <Query query={ALL_EXPENSES_QUERY} variables={{ limit: perPage, offset }}>
        {({ data, error, loading }: QueryResult) => {
          if (loading) {
            return null
          }
          if (error) {
            return <p>Error: {error.message}</p>
          }

          const { expenses } = data
          const filteredData = filterData(expenses.data)
          const showPagination = expenses.data.length > 0 && filterText === ''

          return (
            <>
              <IndexHeader perPage={perPage} offset={offset} />
              <ExpenseFilter filterText={filterText} perPage={perPage} offset={offset} />
              <Expenses data={filteredData} />
              {showPagination && (
                <Pagination total={expenses.total} perPage={perPage} offset={offset} />
              )}
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default Home
export { ALL_EXPENSES_QUERY }
