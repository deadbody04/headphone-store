import React, { createContext, useReducer, useMemo } from 'react'

export const AppContext = createContext({})

const AppProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  )
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
