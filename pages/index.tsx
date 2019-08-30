import { useState } from 'react'
import gql from 'graphql-tag'
import { NextPage } from 'next'
import { Query, QueryResult } from 'react-apollo'
import Expenses from '../components/Expenses'
import IndexHeader from '../components/IndexHeader'
import Pagination from '../components/Pagination'

interface HomeProps {
  query: {
    limit: string,
    offset: string
  };
}

const ALL_EXPENSES_QUERY = gql`
  query ALL_EXPENSES_QUERY($limit: Int, $offset: Int) {
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
        receipts {
          url
        }
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
  const perPage = query.limit ? parseInt(query.limit, 10) : 25
  const offset = query.offset ? parseInt(query.offset, 10) : 0

  return (
    <div>
      <Query query={ALL_EXPENSES_QUERY} variables={{ limit: perPage, offset }}>
        {({ data, error, loading }: QueryResult) => {
          if (loading) {
            return <p>Loading...</p>
          }
          if (error) {
            return <p>Error: {error.message}</p>
          }

          const noExpenseOnPage = data.expenses.data.length === 0
          return (
            <>
              <IndexHeader perPage={perPage} offset={offset} />
              <Expenses data={data.expenses.data} />
              {noExpenseOnPage || (
                <Pagination total={data.expenses.total} perPage={perPage} offset={offset} />
              )}
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default Home
