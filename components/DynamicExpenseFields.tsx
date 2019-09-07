import { useState, SyntheticEvent, useRef, useEffect, ChangeEvent } from 'react'
import { Mutation, MutationResult, MutationFn } from 'react-apollo'
import gql from 'graphql-tag'

import ErrorMessage from './ErrorMessage'
import UploadFile from './UploadFile'
import ImagePreview from './ImagePreview'
import Notification from './Notification'
import { EXPENSE_QUERY } from '../pages/expense'
import Input from './styles/Input'
import Button from './styles/Button'
import Form from './styles/Form'
import { useTranslation } from '../lib/i18n'

interface DynamicExpenseFieldsProps {
  comment: string
  id: string
  receipt: string
}

const UPDATE_EXPENSE_MUTATION = gql`
  mutation UPDATE_EXPENSE_MUTATION($id: ID!, $comment: String!, $receipt: String!) {
    updateExpense(id: $id, comment: $comment, receipt: $receipt) {
      id
    }
  }
`

const DynamicExpenseFields: React.FC<DynamicExpenseFieldsProps> = ({ comment, receipt, id }) => {
  const { t } = useTranslation()
  const [expenseComment, changeComment] = useState(comment)
  const [expenseReceipt, changeReceipt] = useState(receipt)
  const [showNotification, changeNotificationVisibility] = useState(false)
  const timeoutRef = useRef<number>()
  // Clear timeout, to avoid memory leak
  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const commentNotChanged = comment === expenseComment
  const receiptNotChanged = receipt === expenseReceipt

  const onFormSubmit = async (event: SyntheticEvent, updateExpense: MutationFn) => {
    event.preventDefault()
    await updateExpense()

    // NOTE: below code will only be called if expense updated successfully
    // Shows notification popup to let user know that expense save was successful
    changeNotificationVisibility(true)
    timeoutRef.current = setTimeout(() => changeNotificationVisibility(false), 3000)
  }
  const onCommentChange = (e: ChangeEvent<HTMLInputElement>) => changeComment(e.currentTarget.value)
  const onReceiptChange = (value: string) => changeReceipt(value)
  const deleteReceipt = () => changeReceipt('')

  return (
    <Mutation
      mutation={UPDATE_EXPENSE_MUTATION}
      variables={{ id, comment: expenseComment.trim(), receipt: expenseReceipt }}
      refetchQueries={[{ query: EXPENSE_QUERY, variables: { id } }]}
    >
      {(updateExpense: MutationFn, { loading, error }: MutationResult) => (
        <Form onSubmit={(event) => onFormSubmit(event, updateExpense)}>
          {showNotification && <Notification text={t('expense:successNotification')} />}
          <fieldset disabled={loading || showNotification} aria-busy={loading || showNotification}>
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
                value={expenseComment}
                onChange={onCommentChange}
              />
            </div>
            <div className="row receipt-row">
              <label htmlFor="image-input" className="label">
                {t('expense:receipt')}
              </label>
              {expenseReceipt ? (
                <ImagePreview src={expenseReceipt} deleteReceipt={deleteReceipt} />
              ) : (
                <UploadFile addReceipt={onReceiptChange} inputId="image-input" />
              )}
            </div>
            <ErrorMessage error={error} />
            <Button type="submit" disabled={commentNotChanged && receiptNotChanged}>
              {loading ? <span className="spinner" /> : <span>{t('expense:saveBtn')}</span>}
            </Button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  )
}

export default DynamicExpenseFields
