import UploadFile from './UploadFile'
import ImagePreview from './ImagePreview'
import { useTranslation } from '../lib/i18n'

interface ReceiptFieldProps {
  receipt: string
  deleteReceipt: () => void
  addReceipt: (value: string) => void
}

const ReceiptField: React.FC<ReceiptFieldProps> = ({ receipt, deleteReceipt, addReceipt }) => {
  const { t } = useTranslation()

  return (
    <div className="row receipt-row">
      <label htmlFor="image-input" className="label">
        {t('expense:receipt')}
      </label>
      {receipt ? (
        <ImagePreview src={receipt} deleteReceipt={deleteReceipt} />
      ) : (
        <UploadFile addReceipt={addReceipt} inputId="image-input" />
      )}
    </div>
  )
}

export default ReceiptField
