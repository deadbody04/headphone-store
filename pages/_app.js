import GlobalState from '../store/GlobalState'
import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  )
}

export default MyApp
