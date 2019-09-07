import PageNotFound from '../components/PageNotFound'
import { I18nPage } from '../lib/i18n'

const Error: I18nPage = () => <PageNotFound />

Error.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default Error
