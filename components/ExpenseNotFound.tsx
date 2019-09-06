import Head from 'next/head'

import BackToHome from './BackToHome'
import NoItemSection from './styles/NoItemSection'
import HeadingText from './styles/HeadingText'
import { useTranslation } from '../lib/i18n'

const ExpenseNotFound: React.FC = () => {
  const { t } = useTranslation()

  return (
    <NoItemSection>
      <Head>
        <title>{t('common:ExpenseNotFoundText')}!</title>
      </Head>
      <HeadingText>404 — {t('common:ExpenseNotFoundText')}</HeadingText>
      <BackToHome />
    </NoItemSection>
  )
}

export default ExpenseNotFound
