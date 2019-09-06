import Head from 'next/head'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'

import BackToHome from '../components/BackToHome'
import ExpenseItem from '../components/ExpenseItem'
import NoItemSection from '../components/styles/NoItemSection'
import HeadingText from '../components/styles/HeadingText'
import Footer from '../components/Footer'
import { I18nPage, useTranslation } from '../lib/i18n'

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

const Expense: I18nPage<ExpenseProps> = ({ query: { id } }) => {
  const { t } = useTranslation()

  return (
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
                    {t('common:expense')} — {first} {last} &lt;{merchant}&gt;
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
                <title>{t('common:noExpenseText')}!</title>
              </Head>
              <HeadingText fontSize="1.6rem">{t('common:noExpenseText')} - 404</HeadingText>
              <BackToHome />
            </NoItemSection>
          )
        }}
      </Query>
    </div>
  )
}

Expense.getInitialProps = async () => ({
  namespacesRequired: ['expense', 'common']
})

export default Expense
export { EXPENSE_QUERY }
