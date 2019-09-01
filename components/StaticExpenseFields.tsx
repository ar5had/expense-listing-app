import { getSymbolFromCurrency } from '../lib/currencyMap'
import Heading from './styles/Heading'
import HeadingText from './styles/HeadingText'
import { getFormattedTime } from '../lib/dateUtils'
import { StaticExpenseFieldsProps } from '../types/components'

const StaticExpenseFields: React.FC<StaticExpenseFieldsProps> = ({
  currency,
  value,
  date,
  first,
  last,
  email,
  merchant,
  category
}) => (
  <>
    <div className="currency-row">
      <Heading fontSize="3rem" className="amount">
        {`${getSymbolFromCurrency(currency)}${value}`}
      </Heading>
      <HeadingText className="time">{getFormattedTime(date)}</HeadingText>
    </div>
    <div className="row">
      <span className="label">Name</span>
      <span className="value">{`${first} ${last}`}</span>
    </div>
    <div className="row">
      <span className="label">Email</span>
      <span className="value">{email}</span>
    </div>
    <div className="row">
      <span className="label">Merchant</span>
      <span className="value">{merchant}</span>
    </div>
    <div className="row">
      <span className="label">Category</span>
      <span className="value">{category || 'No category added'}</span>
    </div>
  </>
)

export default StaticExpenseFields
