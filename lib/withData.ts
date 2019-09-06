import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

import { localApiEndpoint, productionApiEndpoint } from '../config'

const uri = process.env.NODE_ENV !== 'production' ? localApiEndpoint : productionApiEndpoint

const createClient = () => new ApolloClient({ uri })

export default withApollo(createClient)
