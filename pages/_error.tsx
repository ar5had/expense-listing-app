import ExpenseNotFound from '../components/ExpenseNotFound'
import { I18nPage } from '../lib/i18n'

const Error: I18nPage = () => <ExpenseNotFound />

Error.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default Error
