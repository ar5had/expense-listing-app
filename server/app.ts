import * as express from 'express'
import * as fileUpload from 'express-fileupload'
import * as createError from 'http-errors'
import * as path from 'path'
import * as logger from 'morgan'

import expensesRouter from './routes/expenses'

// load environment variables
require('dotenv').config()

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV === 'development'
const app = require('next')({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(logger('dev'))
  server.use(fileUpload({ limit: { fileSize: Infinity } }))
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

  server.use('/receipts', express.static(path.join(__dirname, 'receipts')))
  server.use('/expenses', expensesRouter)

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) {
      throw err
    }

    console.log(`> Server listening at http://localhost:${port}`)
  })
})