import fs, { ReadStream } from 'fs'
import path from 'path'
import shortid from 'shortid'
import { IResolvers } from 'graphql-tools'

import { expenses } from '../data/expenses'

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
  receipt: File
}

const UPLOAD_DIR = './server/receipts'

// Sort expenses by date
expenses.sort((a, b) => {
  const valA = Date.parse(a.date)
  const valB = Date.parse(b.date)

  return valB - valA
})

const storeFS = ({ stream, ext }: { stream: ReadStream; ext: string }) => {
  const id = shortid.generate()
  const fileName = `${id}${ext}`
  const imagePath = `${UPLOAD_DIR}/${fileName}`

  return new Promise<string>((resolve, reject) =>
    stream
      .pipe(fs.createWriteStream(imagePath))
      .on('error', (error: Error) => reject(error))
      .on('finish', () => resolve(fileName))
  )
}

const processUpload = async (upload: any) => {
  const { createReadStream, filename } = await upload
  const stream = createReadStream()
  const ext = path.extname(filename)
  return await storeFS({ stream, ext })
}

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
  updateExpense: async (_: ParentQuery, { id, comment, receipt }: UpdateExpenseArgs) => {
    const expense = expenses.find((expense) => expense.id === id)

    if (expense) {
      expense.comment = comment.trim()
      if (receipt) {
        const fileName = await processUpload(receipt)
        expense.receipt = `/receipts/${fileName}`
      }
    }

    return expense
  }
}

export const resolvers: IResolvers = { Query, Mutation }
