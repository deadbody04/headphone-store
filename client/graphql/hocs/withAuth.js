import React, { useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import ME from '../queries/Me'
import { AppContext } from '../../store/providers/AppProvider'
import * as ACTIONS from '../../store/actions/auth'
import { logoutUser } from '../../utils/_mocks_/auth'

const withAuth = (Component) => {
  const Wrapper = (props) => {
    const { state, dispatch } = useContext(AppContext)
    // const router = useRouter()

    const { data, loading, error } = useQuery(ME)

    useEffect(() => {
      const syncLogout = (event) => {
        if (event.key === 'logout') {
          logoutUser(dispatch)
        }
      }
      window.addEventListener('storage', syncLogout)
      if (!loading && data) {
        dispatch(ACTIONS.authSuccess({ user: data.me }))
      }
      if (error) {
        syncLogout({ key: 'logout' })
      }
      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [data, loading, error])
    if (state.token) {
      return <Component {...props} />
    }
  }
  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps
  }
  return React.memo(Wrapper)
}

export default withAuth()
