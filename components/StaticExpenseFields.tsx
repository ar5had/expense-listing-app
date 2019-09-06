import { getSymbolFromCurrency } from '../lib/currencyMap'
import Heading from './styles/Heading'
import HeadingText from './styles/HeadingText'
import { getFormattedTime } from '../lib/dateUtils'
import { StaticExpenseFieldsProps } from '../types/components'
import { useTranslation } from '../lib/i18n'

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
  const { t } = useTranslation()

  return (
    <>
      <div className="currency-row">
        <Heading className="amount">{`${getSymbolFromCurrency(currency)}${value}`}</Heading>
        <HeadingText className="time">{getFormattedTime(date)}</HeadingText>
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
