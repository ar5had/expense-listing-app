import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

import { graphqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'

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

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.prepare().then(() => {
  const server = express()

  server.use(logger('dev'))
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

  // graphql endpoint
  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }))

  // next.js handling rest of the get requests
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Server listening at http://localhost:${port}`)
  })
})
