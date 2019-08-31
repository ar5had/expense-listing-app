import { useState, SyntheticEvent } from 'react'
import { Mutation, MutationResult } from 'react-apollo'
import Input from './styles/Input'
import Button from './styles/Button'
import FileInput from './styles/FileInput'
import { DynamicExpenseFieldsProps } from '../types/components'
import Form from './styles/Form'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

const UPDATE_EXPENSE_MUTATION = gql`
  mutation UPDATE_EXPENSE_MUTATION($id: ID!, $comment: String!) {
    updateExpense(id: $id, comment: $comment) {
      id
    }
  }
`

const DynamicExpenseFields: React.FC<DynamicExpenseFieldsProps> = ({ comment, receipts, id }) => {
  const [expenseComment, changeComment] = useState(comment)

  const disableSaveBtn = comment === expenseComment

  return (
    <Mutation mutation={UPDATE_EXPENSE_MUTATION} variables={{ id, comment: expenseComment }}>
      {(updateExpense: any, { loading, error }: MutationResult) => (
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
                onChange={({ currentTarget: { value } }) => changeComment(value)}
              />
            </div>
            <div className="row">
              <span className="label">Receipts</span>
              <FileInput className="receipt-input" placeholder="Add a receipt" />
            </div>
            <div className="row error-row">
              <ErrorMessage error={error} />
            </div>
            <div className="row">
              <Button className="save-btn" type="submit" disabled={disableSaveBtn}>
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
