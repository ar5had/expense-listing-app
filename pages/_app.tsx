import App from 'next/app'
import { NextComponentType, NextPageContext } from 'next'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import Page from '../components/page'
import withData from '../lib/withData'

interface PageProps {
  [index: string]: any;
}

class MyApp extends App<{
  apollo: ApolloClient<{}>,
  Component: NextComponentType,
  ctx: NextPageContext
}> {
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps: PageProps = {}

  // makes sure all the queries and mutations on the page are fired up before component is rendered
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  // this exposes the query to the user
  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)
