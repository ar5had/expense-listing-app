import express from 'express'
import next from 'next'
import bodyParser from 'body-parser'
import nextI18NextMiddleware from 'next-i18next/middleware'

import { ApolloServer } from 'apollo-server-express'

import nextI18next from '../lib/i18n'
import { typeDefs } from './config/schema'
import { resolvers } from './config/resolvers'

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json({ limit: '50mb' }))
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
