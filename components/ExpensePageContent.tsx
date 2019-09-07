import Head from 'next/head'

import Footer from './Footer'
import ExpenseData from './ExpenseData'
import { useTranslation } from '../lib/i18n'
import { ExpenseProps } from './types/common'

interface ExpensePageContentProps {
  expenseData: ExpenseProps
}

const ExpensePageContent: React.FC<ExpensePageContentProps> = ({ expenseData }) => {
  const { t } = useTranslation()
  const {
    user: { first, last },
    merchant
  } = expenseData

  return (
    <>
      <Head>
        <title>
          {t('common:expense')} — {first} {last} &lt;{merchant}&gt;
        </title>
      </Head>
      <ExpenseData {...expenseData} />
      <Footer />
    </>
  )
}

export default ExpensePageContent
