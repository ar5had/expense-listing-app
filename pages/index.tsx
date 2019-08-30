import { useState } from 'react'
import gql from 'graphql-tag'
import { NextPage } from 'next'
import { Query, QueryResult } from 'react-apollo'
import styled from 'styled-components'
import Expenses from '../components/Expenses'
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import { gts } from '../lib/getThemeStyle'
import Link from 'next/link'

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

const StyledHeading = styled.h1`
  font-family: ${gts('emFont')};
  font-size: 3.5rem;
  text-align: center;
  margin: ${gts('smMargin')}px 0 ${gts('xlMargin')}px;
  line-height: 1.5;
`

const Home: NextPage<{ query: any }> = ({ query }) => {
  const [limit, changeLimit] = useState(25)
  const page = query.page ? parseInt(query.page, 10) : 1
  const offset = (page - 1) * limit

  return (
    <div>
      <Query query={ALL_EXPENSES_QUERY} variables={{ limit, offset }}>
        {({ data, error, loading }: QueryResult) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>

          const noExpenseOnPage = data.expenses.data.length === 0
          return (
            <>
              <StyledHeading>
                <Link href="/">
                  <a>Expenses</a>
                </Link>
              </StyledHeading>
              {/* <Filter /> */}
              <Expenses data={data.expenses.data} />
              {noExpenseOnPage || (
                <Pagination total={data.expenses.total} perPage={limit} page={page} />
              )}
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default Home
