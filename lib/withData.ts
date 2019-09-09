import withApollo from 'next-with-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'

import { localApiEndpoint, productionApiEndpoint } from '../config'

const uri = process.env.NODE_ENV !== 'production' ? localApiEndpoint : productionApiEndpoint

const createClient = () =>
  new ApolloClient({
    link: createUploadLink({ uri }),
    cache: new InMemoryCache()
  })

export default withApollo(createClient)
