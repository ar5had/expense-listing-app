import gql from 'graphql-tag'
import { Query, QueryResult } from 'react-apollo'

import IndexHeader from '../components/HomeHeader'
import Expenses from '../components/Expenses'
import Pagination from '../components/Pagination'
import ExpenseFilter from '../components/ExpenseFilter'
import Footer from '../components/Footer'
import FilterResultsHeading from '../components/FilterResultsHeading'
import { filterExpenseData } from '../lib/filterUtils'
import { I18nPage } from '../lib/i18n'

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
          email
        }
      }
      total
    }
  }
`

const Home: I18nPage<HomeProps> = ({ query }) => {
  const perPage = parseInt(query.limit, 10) || 10
  const offset = parseInt(query.offset, 10) || 0
  const filterText = query.search || ''

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
          const filteredData = filterExpenseData(expenses.data, filterText)
          const showPagination = expenses.data.length > 0 && filterText === ''

          return (
            <>
              <IndexHeader perPage={perPage} offset={offset} />
              <ExpenseFilter filterText={filterText} perPage={perPage} offset={offset} />
              <FilterResultsHeading length={filteredData.length} filterText={filterText} />
              <Expenses data={filteredData} />
              {showPagination && (
                <Pagination total={expenses.total} perPage={perPage} offset={offset} />
              )}
              <Footer />
            </>
          )
        }}
      </Query>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'common']
})

export default Home
