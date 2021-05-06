import React from 'react'

import AppProvider from '../providers/AppProvider'
import { initialState, authReducer } from '../reducers/authReducer'

const AppController = ({ children }) => {
  return (
    <AppProvider reducer={authReducer} initialState={initialState}>
      {children}
    </AppProvider>
  )
}

export default AppController
