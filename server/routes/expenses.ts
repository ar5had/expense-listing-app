import * as express from 'express'
import * as createError from 'http-errors'

import { expenses } from '../data/expenses'
import { UploadedFile } from 'express-fileupload'

const router = express.Router()

router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 25
  const offset = parseInt(req.query.offset) || 0

  res.send({
    expenses: expenses
      .sort((a, b) => {
        const valA = Date.parse(a.date)
        const valB = Date.parse(b.date)

        if (valA > valB) {
          return -1
        }
        if (valB > valA) {
          return 1
        }
        return 0
      })
      .slice(offset, offset + limit)
      .map((expense, index) => {
        return {
          ...expense,
          index: offset + index
        }
      }),
    total: expenses.length
  })
})

router.get('/:id', (req, res, next) => {
  const expense = expenses.find((expense) => expense.id === req.params.id)

  if (expense) {
    res.send(expense)
  } else {
    next()
  }
})

router.post('/:id', (req, res, next) => {
  const expense = expenses.find((expense) => expense.id === req.params.id)

  if (expense) {
    expense.comment = req.body.comment || expense.comment
    res.status(200).send(expense)
  } else {
    next()
  }
})

router.post('/:id/receipts', (req, res, next) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.')
  }

  const id = req.params.id
  const expense = expenses.find((expense) => expense.id === id)

  if (expense) {
    const receipt = req.files.receipt as UploadedFile
    const receiptId = `${id}-${expense.receipts.length}`
    receipt.mv(`${process.cwd()}/receipts/${receiptId}`, err => {
      if (err) {
        return res.status(500).send(err)
      }

      expense.receipts.push({ url: `/receipts/${receiptId}` })
      res.status(200).send(expense)
    })
  } else {
    next()
  }
})


router.use((req, res, next) => next(createError(404)))
router.use((err, req, res, next) => {
  const status = err.status || 500

  res.status(status || 500).send({ status, err })
})

export default router
