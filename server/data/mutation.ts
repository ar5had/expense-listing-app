import { expenses } from './expenses'

export const Mutation = {
  updateComment: (_, { id, comment }) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment || expense.comment
    }

    return expense
  },
  updateReceipt: (_, { id, receiptUrls }) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense && receiptUrls.length) {
      const newReceipts = receiptUrls.map((url) => ({ id: Date.now(), url }))
      expense.receipts = expense.receipts.concat(newReceipts)
    }

    return expense
  }
}
