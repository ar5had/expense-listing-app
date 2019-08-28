import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { apiEndpoint } from '../config'

const createClient = () => new ApolloClient({ uri: apiEndpoint })

export default withApollo(createClient)
