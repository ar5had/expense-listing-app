import HomeHeader from './HomeHeader'
import Expenses from './Expenses'
import Pagination from './Pagination'
import ExpenseFilter from './ExpenseFilter'
import Footer from './Footer'
import FilterResultsInfo from './FilterResultsInfo'
import { filterExpenseData } from '../lib/filterUtils'
import { ExpenseProps } from './types/common'

interface HomePageContentProps {
  expensesData: ExpenseProps[]
  filterText: string
  total: number
  perPage: number
  offset: number
}

const HomePageContent: React.FC<HomePageContentProps> = ({
  total,
  expensesData,
  filterText,
  perPage,
  offset
}) => {
  const filteredData = filterExpenseData(expensesData, filterText)
  const showPagination = expensesData.length > 0 && filterText === ''

  return (
    <>
      <HomeHeader perPage={perPage} offset={offset} />
      <ExpenseFilter filterText={filterText} perPage={perPage} offset={offset} />
      <FilterResultsInfo length={filteredData.length} filterText={filterText} />
      <Expenses data={filteredData} />
      {showPagination && <Pagination total={total} perPage={perPage} offset={offset} />}
      <Footer />
    </>
  )
}

export default HomePageContent
