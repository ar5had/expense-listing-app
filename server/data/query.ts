import { expenses } from './expenses'

export const Query = {
  expenses: (_, { limit = 25, offset = 0 }) => {
    limit = Math.round(limit)
    offset = Math.round(offset)

    return {
      data: expenses
        .sort((a, b) => {
          const valA = Date.parse(a.date)
          const valB = Date.parse(b.date)

          return valB - valA
        })
        .slice(offset, offset + limit)
        .map((expense, index) => {
          return {
            ...expense,
            index: offset + index
          }
        }),
      total: expenses.length
    }
  },
  expense: (_, { id }) => expenses.find((expense) => expense.id === id)
}
