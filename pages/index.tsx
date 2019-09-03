import Router from 'next/router'
import gql from 'graphql-tag'
import { NextPage } from 'next'
import { Query, QueryResult } from 'react-apollo'
import NProgress from 'nprogress'
import Expenses from '../components/Expenses'
import IndexHeader from '../components/IndexHeader'
import Pagination from '../components/Pagination'
import ExpenseFilter from '../components/ExpenseFilter'
import { useState } from 'react'
import { ExpenseProps } from 'types/components'

interface HomeProps {
  query: {
    limit: string,
    offset: string
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
  const [filterText, changeFilterText] = useState('')

  const filterData = (data: ExpenseProps) =>
    data.filter((expense: ExpenseProps) => {
      const regex = new RegExp(filterText, 'gi')
      const filterFields = ['first', 'last', 'comment', 'merchant']
      return filterFields.some((filterField) => regex.test(expense[filterField]))
    })

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

          // completes loading bar
          Router.events.on('routeChangeComplete', () => {
            NProgress.done()
          })

          const { expenses } = data
          const filteredData = filterData(expenses.data)
          const showPagination = expenses.data.length > 0 && filterText !== ''

          return (
            <>
              <IndexHeader perPage={perPage} offset={offset} />
              <ExpenseFilter filterText={filterText} changeFilterText={changeFilterText} />
              <Expenses data={filteredData} />
              {showPagination || (
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
