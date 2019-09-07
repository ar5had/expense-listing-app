import Heading from './styles/Heading'
import HeadingText from './styles/HeadingText'
import { getSymbolFromCurrency } from '../lib/currencySymbolMap'
import { getFormattedTime } from '../lib/dateUtils'
import { useTranslation } from '../lib/i18n'

interface StaticExpenseFieldsProps {
  currency: string
  value: string
  first: string
  last: string
  email: string
  merchant: string
  category: string
  date: string
}

const StaticExpenseFields: React.FC<StaticExpenseFieldsProps> = ({
  currency,
  value,
  date,
  first,
  last,
  email,
  merchant,
  category
}) => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="currency-row">
        <Heading className="amount">{`${getSymbolFromCurrency(currency)}${value}`}</Heading>
        <HeadingText className="time">{getFormattedTime(date, i18n.language)}</HeadingText>
      </div>
      <div className="row">
        <span className="label">{t('common:name')}</span>
        <span className="value">{`${first} ${last}`}</span>
      </div>
      <div className="row">
        <span className="label">{t('common:email')}</span>
        <span className="value">{email}</span>
      </div>
      <div className="row">
        <span className="label">{t('common:merchant')}</span>
        <span className="value">{merchant}</span>
      </div>
      <div className="row">
        <span className="label">{t('expense:category')}</span>
        <span className="value">{category || 'No category added'}</span>
      </div>
    </>
  )
}

export default StaticExpenseFields
