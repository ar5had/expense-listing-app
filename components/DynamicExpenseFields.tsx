import { useState, SyntheticEvent, useRef, useEffect, ChangeEvent } from 'react'
import { Mutation, MutationResult, MutationFn } from 'react-apollo'
import gql from 'graphql-tag'

import ErrorMessage from './ErrorMessage'
import Notification from './Notification'
import CommentField from './CommentField'
import { EXPENSE_QUERY } from '../pages/expense'
import Button from './styles/Button'
import Form from './styles/Form'
import Spinner from './styles/Spinner'
import { useTranslation } from '../lib/i18n'
import ReceiptField from './ReceiptField'
import { Image } from './types/common'

interface DynamicExpenseFieldsProps {
  comment: string
  id: string
  receipt: string
}

const UPDATE_EXPENSE_MUTATION = gql`
  mutation UPDATE_EXPENSE_MUTATION($id: ID!, $comment: String!, $receipt: Upload) {
    updateExpense(id: $id, comment: $comment, receipt: $receipt) {
      id
    }
  }
`

const DynamicExpenseFields: React.FC<DynamicExpenseFieldsProps> = ({ comment, receipt, id }) => {
  const { t } = useTranslation()
  const [expenseComment, changeComment] = useState(comment)
  const [expenseReceipt, changeReceipt] = useState<Image>({ preview: '', url: receipt, file: null })
  const [showNotification, changeNotificationVisibility] = useState(false)
  const timeoutRef = useRef<number>()
  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const onFormSubmit = async (event: SyntheticEvent, updateExpense: MutationFn) => {
    event.preventDefault()

    await updateExpense()

    // NOTE: below code will only be called if expense updated successfully
    // Shows the notification popup to let user know that expense save was successful
    changeNotificationVisibility(true)
    // Hides the notification popup after 3 seconds
    timeoutRef.current = setTimeout(() => changeNotificationVisibility(false), 3000)
  }
  const onCommentChange = (e: ChangeEvent<HTMLInputElement>) => changeComment(e.currentTarget.value)
  const addReceipt: (image: Image) => void = (image) => changeReceipt(image)
  const deleteReceipt = () => changeReceipt({ preview: '', url: '', file: null })

  return (
    <Mutation
      mutation={UPDATE_EXPENSE_MUTATION}
      variables={{
        id,
        comment: expenseComment.trim(),
        receipt: expenseReceipt.file
      }}
      refetchQueries={[{ query: EXPENSE_QUERY, variables: { id } }]}
    >
      {(updateExpense: MutationFn, { loading, error }: MutationResult) => (
        <Form onSubmit={(event) => onFormSubmit(event, updateExpense)}>
          {showNotification && <Notification text={t('expense:successNotification')} />}
          <fieldset disabled={loading || showNotification} aria-busy={loading || showNotification}>
            <CommentField comment={expenseComment} onChange={onCommentChange} />
            <ReceiptField
              receipt={expenseReceipt.preview || expenseReceipt.url}
              addReceipt={addReceipt}
              deleteReceipt={deleteReceipt}
            />
            <ErrorMessage error={error} />
            <Button type="submit" disabled={loading || showNotification}>
              {loading ? <Spinner /> : t('expense:saveBtn')}
            </Button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  )
}

export default DynamicExpenseFields
