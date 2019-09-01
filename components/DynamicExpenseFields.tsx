import { useState, SyntheticEvent } from 'react'
import { Mutation, MutationResult } from 'react-apollo'
import gql from 'graphql-tag'
import Input from './styles/Input'
import Button from './styles/Button'
import { DynamicExpenseFieldsProps } from '../types/components'
import Form from './styles/Form'
import ErrorMessage from './ErrorMessage'
import UploadFile from './UploadFile'
import ImagePreview from './ImagePreview'
import { ALL_EXPENSES_QUERY } from '../pages'

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

  const updateCache = (cache: any, payload: { [index: string]: any }) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    // Dont know why I am getting error - Invariant Violation: Can't find field expenses({}) on object
    // const data = cache.readQuery({ query: ALL_EXPENSES_QUERY })
  }

  const commentNotChanged = comment === expenseComment
  const receiptNotChanged = receipt === expenseReceipt

  const onCommentChange = (event: any) => changeComment(event.target.value)
  const onReceiptChange = (value: string) => changeReceipt(value)

  const deleteReceipt = () => changeReceipt('')

  return (
    <Mutation
      mutation={UPDATE_EXPENSE_MUTATION}
      variables={{ id, comment: expenseComment, receipt: expenseReceipt }}
      update={updateCache}
    >
      {(updateExpense: any, { loading, error }: MutationResult) => (
        // updateExpense is only available inside render prop callback
        // that's why onSubmit function is not moved outside jsx
        <Form
          onSubmit={async (event: SyntheticEvent) => {
            // stop the form submission
            event.preventDefault()
            // update expense
            await updateExpense()
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <div className="row">
              <span className="label">Comment</span>
              <Input
                className="comment-input"
                placeholder="Add a comment"
                type="text"
                value={expenseComment}
                onChange={onCommentChange}
              />
            </div>
            <div className="row receipt-row">
              <span className="label">Receipt</span>
              {expenseReceipt ? (
                <ImagePreview src={expenseReceipt} deleteReceipt={deleteReceipt} />
              ) : (
                <UploadFile addReceipt={onReceiptChange} />
              )}
            </div>
            <div className="row error-row">
              <ErrorMessage error={error} />
            </div>
            <div className="row">
              <Button
                className="save-btn"
                type="submit"
                disabled={commentNotChanged && receiptNotChanged}
              >
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
