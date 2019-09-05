import { NextPage } from 'next'
import Head from 'next/head'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'
import BackToHome from '../components/BackToHome'
import ExpenseItem from '../components/ExpenseItem'
import NoItemSection from '../components/styles/NoItemSection'
import HeadingText from '../components/styles/HeadingText'
import Footer from '../components/Footer'

interface ExpenseProps {
  query: {
    id: string
  };
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

const Expense: NextPage<ExpenseProps> = ({ query: { id } }) => (
  <div>
    <Query query={EXPENSE_QUERY} variables={{ id }}>
      {({ data, error, loading }: QueryResult) => {
        if (loading) {
          return null
        }
        if (error) {
          return <p>Error: {error.message}</p>
        }

        // show expense item and change document title accordingly
        if (data.expense) {
          const {
            user: { first, last },
            merchant
          } = data.expense

          return (
            <>
              <Head>
                <title>
                  Expense — {first} {last} &lt;{merchant}&gt;
                </title>
              </Head>
              <ExpenseItem {...data.expense} />
              <Footer />
            </>
          )
        }

        // show error and change document title accordingly
        return (
          <NoItemSection>
            <Head>
              <title>Expense Not Found!</title>
            </Head>
            <HeadingText fontSize="1.6rem">Expense not found - 404</HeadingText>
            <BackToHome />
          </NoItemSection>
        )
      }}
    </Query>
  </div>
)

export default Expense
export { EXPENSE_QUERY }
