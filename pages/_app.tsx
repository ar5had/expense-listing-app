import App, { AppContext } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import Page from '../components/Page'
import withData from '../lib/withData'
import { appWithTranslation } from '../lib/i18n'

class MyApp extends App<{ apollo: ApolloClient<{}> }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: Record<string, any> = {}

    // Makes sure all the queries and mutations are fired up before component is rendered
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Exposes the query
    pageProps.query = ctx.query

    return { pageProps }
  }
  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    )
  }
}

export default withData(appWithTranslation(MyApp))
