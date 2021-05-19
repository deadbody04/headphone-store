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
// export function withContext(Component) {
//   return function ContextComponent(props) {
//     return (
//       <AppContext.Consumer>
//         {(context) => <Component {...props} context={context} />}
//       </AppContext.Consumer>
//     )
//   }
// }
export default AppProvider
