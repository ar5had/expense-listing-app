import express from 'express'
import next from 'next'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
const nextI18NextMiddleware = require('next-i18next/middleware').default

import { ApolloServer } from 'apollo-server-express'

import nextI18next from '../lib/i18n'
import { typeDefs } from './config/schema'
import { resolvers } from './config/resolvers'

// load environment variables
dotenv.config()

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json({ limit: '50mb' }))
  server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  apolloServer.applyMiddleware({ app: server, path: '/graphql' })

  // nextI18 middleware redirects when `localeSubpaths` are turned on, therefore it is important to
  // place apollo server middleware before it
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})
