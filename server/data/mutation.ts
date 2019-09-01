import { expenses } from './expenses'

export const Mutation = {
  updateExpense: (_, { id, comment, receipt }) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment
      expense.receipt = receipt
    }

    return expense
  }
}
