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
        <title>{t('common:pageNotFound')}!</title>
      </Head>
      <HeadingText>404 — {t('common:pageNotFound')}</HeadingText>
      <BackToHome />
    </NoItemSection>
  )
}

export default ExpenseNotFound
