import React, { useEffect } from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import AppController from '../store/controllers/AppController'

import withApollo from '../graphql/apolloClient'
import GlobalState from '../store/providers/GlobalState'
import '../public/styles/globals.css'

const MyApp = ({ Component, pageProps, apollo }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <GlobalState>
      <AppController>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </AppController>
    </GlobalState>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default withApollo(MyApp)
