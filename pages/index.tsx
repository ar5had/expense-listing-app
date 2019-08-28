import Link from 'next/link'
import gql from 'graphql-tag'
import { NextPage } from 'next'
import { Query, QueryResult } from 'react-apollo'

const ALL_EXPENSES_QUERY = gql`
  query ALL_EXPENSES_QUERY($limit: Int, $offset: Int) {
    expenses(limit: $limit, offset: $offset) {
      data {
        id
        date
      }
      total
    }
  }
`

const Home: NextPage = () => (
  <>
    <h1>Expense List</h1>
    <Link href="/item">
      <a>/item</a>
    </Link>
    <Query query={ALL_EXPENSES_QUERY} variables={{ limit: 3, offset: 0 }}>
      {({ data, error, loading }: QueryResult) => {
        console.log(data, error, loading)
        return <p>I am child of query</p>
      }}
    </Query>
  </>
)

export default Home
