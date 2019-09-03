import { expenses } from '../data/expenses'
import { IResolvers } from 'graphql-tools'

type IParentQuery = Record<string, any>

const sortedExpenses = expenses.sort((a, b) => {
  const valA = Date.parse(a.date)
  const valB = Date.parse(b.date)

  return valB - valA
})

const Query = {
  expenses: (_: IParentQuery, { limit = 10, offset = 0 }: { limit: number, offset: number }) => {
    limit = Math.round(limit)
    offset = Math.round(offset)

    return {
      data: sortedExpenses.slice(offset, offset + limit),
      total: sortedExpenses.length
    }
  },
  expense: (_: IParentQuery, { id }: { id: string }) =>
    sortedExpenses.find((expense) => expense.id === id)
}

const Mutation = {
  updateExpense: (
    _: IParentQuery,
    { id, comment, receipt }: { id: string, comment: string, receipt: string }
  ) => {
    const expense = sortedExpenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment
      expense.receipt = receipt
    }

    return expense
  }
}

export const resolvers: IResolvers = { Query, Mutation }
