import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './data/schema'
import { Mutation } from './data/mutation'
import { Query } from './data/query'

// load environment variables
require('dotenv').config()

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = require('next')({ dev })
const handle = app.getRequestHandler()
const resolvers = { Query, Mutation }

const apolloServer = new ApolloServer({ typeDefs, resolvers })

app.prepare().then(() => {
  const server = express()

  server.use(logger('dev'))
  server.use(bodyParser.json({ limit: '50mb' }))
  server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  // connect apollo server with express server
  apolloServer.applyMiddleware({ app: server, path: '/graphql' })

  // next.js handling rest of the get requests
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Server listening at http://localhost:${port}`)
  })
})
