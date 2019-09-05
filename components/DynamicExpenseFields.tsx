import { useState, SyntheticEvent, useRef, useEffect, ChangeEvent } from 'react'
import { Mutation, MutationResult } from 'react-apollo'
import gql from 'graphql-tag'
import Input from './styles/Input'
import Button from './styles/Button'
import { DynamicExpenseFieldsProps } from '../types/components'
import Form from './styles/Form'
import ErrorMessage from './ErrorMessage'
import UploadFile from './UploadFile'
import ImagePreview from './ImagePreview'
import { EXPENSE_QUERY } from '../pages/expense'
import Notification from './Notification'

const UPDATE_EXPENSE_MUTATION = gql`
  mutation UPDATE_EXPENSE_MUTATION($id: ID!, $comment: String!, $receipt: String!) {
    updateExpense(id: $id, comment: $comment, receipt: $receipt) {
      id
    }
  }
`

const DynamicExpenseFields: React.FC<DynamicExpenseFieldsProps> = ({ comment, receipt, id }) => {
  const [expenseComment, changeComment] = useState(comment)
  const [expenseReceipt, changeReceipt] = useState(receipt)
  const [showNotification, changeNotificationVisibility] = useState(false)
  // passing a number just to make typescript happy else it will complain when timeoutRef.current
  // will be assinged to setTimeout id
  const timeoutRef = useRef(1)

  const commentNotChanged = comment === expenseComment
  const receiptNotChanged = receipt === expenseReceipt

  const onCommentChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    changeComment(value)
  const onReceiptChange = (value: string) => changeReceipt(value)
  const deleteReceipt = () => changeReceipt('')

  // this effect works as componentWillUnmount, to avoid memory leak, in case when user has made
  // changes and moves to new page before 3 seconds(the time in which status updates are shown)
  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <Mutation
      mutation={UPDATE_EXPENSE_MUTATION}
      variables={{ id, comment: expenseComment.trim(), receipt: expenseReceipt }}
      refetchQueries={[{ query: EXPENSE_QUERY, variables: { id } }]}
    >
      {(updateExpense: any, { loading, error }: MutationResult) => (
        <Form
          onSubmit={async (event: SyntheticEvent) => {
            // stop the form submission
            event.preventDefault()

            // update expense
            await updateExpense()

            // NOTE: below code will only be called if expense updated successfully
            // Show successful update status
            changeNotificationVisibility(true)

            // NOTE: such async calls must be cleared before the component unmounts
            // Hide update status after 3 seconds
            timeoutRef.current = setTimeout(() => changeNotificationVisibility(false), 3000)
          }}
        >
          {showNotification && <Notification text="Expense changes saved ✅" />}
          <fieldset disabled={loading || showNotification} aria-busy={loading || showNotification}>
            <div className="row">
              <label htmlFor="comment-input" className="label">
                Comment
              </label>
              <Input
                className="comment-input"
                placeholder="Add a comment..."
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
                Receipt
              </label>
              {expenseReceipt ? (
                <ImagePreview src={expenseReceipt} deleteReceipt={deleteReceipt} />
              ) : (
                <UploadFile addReceipt={onReceiptChange} inputId="image-input" />
              )}
            </div>
            <div className="row error-row">
              <ErrorMessage error={error} />
            </div>
            <div className="row">
              <Button type="submit" disabled={commentNotChanged && receiptNotChanged}>
                {loading ? <span className="spinner" /> : <span>Save Changes</span>}
              </Button>
            </div>
          </fieldset>
        </Form>
      )}
    </Mutation>
  )
}

export default DynamicExpenseFields
