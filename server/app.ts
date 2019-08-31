import * as express from 'express'
import * as logger from 'morgan'
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
  // graphql endpoint
  const path = '/graphql'

  apolloServer.applyMiddleware({ app: server, path })

  server.use(logger('dev'))

  // next.js handling rest of the get requests
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Server listening at http://localhost:${port}`)
  })
})
