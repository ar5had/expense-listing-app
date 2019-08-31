import { expenses } from './expenses'

export const Mutation = {
  updateExpense: (_, { id, comment, receiptUrls }) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment || expense.comment
    }

    if (expense && receiptUrls && receiptUrls.length) {
      const newReceipts = receiptUrls.map((url) => ({ id: Date.now(), url }))
      expense.receipts = expense.receipts.concat(newReceipts)
    }

    return expense
  }
}
