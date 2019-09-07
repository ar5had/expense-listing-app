import gql from 'graphql-tag'
import { Query, QueryResult } from 'react-apollo'

import HomePageContent from '../components/HomePageContent'
import { I18nPage } from '../lib/i18n'

interface HomeProps {
  query: {
    limit: string
    offset: string
    search: string
  }
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
    <Query query={ALL_EXPENSES_QUERY} variables={{ limit: perPage, offset }}>
      {({ data: { expenses }, error, loading }: QueryResult) => {
        if (loading) {
          return null
        }
        if (error) {
          return <p>Error: {error.message}</p>
        }

        return (
          <HomePageContent
            total={expenses.total}
            expensesData={expenses.data}
            filterText={filterText}
            perPage={perPage}
            offset={offset}
          />
        )
      }}
    </Query>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'common']
})

export default Home
