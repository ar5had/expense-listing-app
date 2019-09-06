import { expenses } from '../data/expenses'
import { IResolvers } from 'graphql-tools'

type ParentQuery = Record<string, any>

interface ExpensesQueryArgs {
  limit: number
  offset: number
}

interface ExpenseQueryArgs {
  id: string
}

interface UpdateExpenseArgs {
  id: string
  comment: string
  receipt: string
}

// sort expenses by date
expenses.sort((a, b) => {
  const valA = Date.parse(a.date)
  const valB = Date.parse(b.date)

  return valB - valA
})

const Query = {
  expenses: (_: ParentQuery, { limit = 10, offset = 0 }: ExpensesQueryArgs) => {
    const rLimit = Math.round(limit)
    const rOffset = Math.round(offset)

    return {
      data: expenses.slice(rOffset, rOffset + rLimit),
      total: expenses.length
    }
  },
  expense: (_: ParentQuery, { id }: ExpenseQueryArgs) =>
    expenses.find((expense) => expense.id === id)
}

const Mutation = {
  updateExpense: (_: ParentQuery, { id, comment, receipt }: UpdateExpenseArgs) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment.trim()
      expense.receipt = receipt
    }

    return expense
  }
}

export const resolvers: IResolvers = { Query, Mutation }
