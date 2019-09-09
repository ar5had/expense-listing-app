import fs from 'fs'
import express from 'express'
import path from 'path'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import rimraf from 'rimraf'

import { ApolloServer } from 'apollo-server-express'

import nextI18next from '../lib/i18n'
import { typeDefs } from './config/schema'
import { resolvers } from './config/resolvers'

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: {
    maxFileSize: 10000000, // 10 MB
    maxFiles: 1
  }
})

app.prepare().then(() => {
  const server = express()
  const receiptsFolder = path.join(__dirname, 'receipts')

  // Remove receipts folder
  rimraf(receiptsFolder, (err) =>
    console.log(`Error occurred while removing receipts folder: ${err}`)
  )
  // Create receipts folder
  fs.mkdirSync(receiptsFolder)

  server.use('/receipts', express.static(receiptsFolder))
  server.use(nextI18NextMiddleware(nextI18next))

  apolloServer.applyMiddleware({ app: server, path: '/graphql' })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})
