import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import * as ACTIONS from '../../store/actions/auth'
import { AppContext } from '../../store/providers/AppProvider'
import { logoutUser } from '../../utils/_mocks_/auth'

const ProviderPage = () => {
  const router = useRouter()
  const { dispatch } = useContext(AppContext)
  const { provider } = router.query

  useEffect(() => {
    const syncLogout = (event) => {
      if (event.key === 'logout') {
        logoutUser(dispatch)
      }
    }
    try {
      fetch(
        `${process.env.STRAPI_API_URL}${router.asPath.replace(
          `auth/${provider}`,
          `auth/${provider}/callback`
        )}`
      )
        .then((data) => data.json())
        .then((res) => {
          if (res.user) {
            dispatch(ACTIONS.authSuccess(res))
            Cookies.set('token', res.jwt)
            //Вы вошли
            router.push('/')
          } else {
            dispatch(ACTIONS.authError())
            if (res.message.code === 11000) {
              //Пользователь уже существует
            } else if (Array.isArray(res.message)) {
              //email уже существует
            } else {
              //Ошибка
            }
            //router.push
          }
        })
      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    } catch (error) {
      //шибака
      //router.push
    }
  }, [router])
}

export default ProviderPage
