import { ChangeEvent } from 'react'

import Input from './styles/Input'
import { useTranslation } from '../lib/i18n'

interface CommentFieldProps {
  comment: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CommentField: React.FC<CommentFieldProps> = ({ comment, onChange }) => {
  const { t } = useTranslation()

  return (
    <div className="row">
      <label htmlFor="comment-input" className="label">
        {t('common:comment')}
      </label>
      <Input
        className="comment-input"
        placeholder={t('expense:addCommentPlaceholder')}
        type="text"
        id="comment-input"
        autoComplete="off"
        maxLength={300}
        value={comment}
        onChange={onChange}
      />
    </div>
  )
}

export default CommentField
