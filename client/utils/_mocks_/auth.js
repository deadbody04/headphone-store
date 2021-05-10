import Cookies from 'js-cookie'

import * as ACTIONS from '../../store/actions/auth'

export const registerUser = async (dispatch, register, payload) => {
  try {
    dispatch(ACTIONS.requestAuth())
    const { data } = await register({
      variables: {
        input: {
          ...payload,
          passwordConfirm: undefined,
        },
      },
    })
    if (data.register?.user) {
      dispatch(ACTIONS.authSuccess(data.register))
      Cookies.set('token', data.register.jwt)
      return data.register
    }
    dispatch(ACTIONS.authError())
    return data.errors[0]
  } catch (error) {
    dispatch(ACTIONS.authError())
    return error
  }
}

export const loginUser = async (dispatch, login, payload) => {
  try {
    console.log(data)
    dispatch(ACTIONS.requestAuth())
    const { data } = await login({
      variables: {
        input: payload,
      },
    })
    if (data.login?.user) {
      dispatch(ACTIONS.authSuccess(data.login))
      Cookies.set('token', data.login.jwt)
      return data.login
    }
    dispatch(ACTIONS.authError())
    return data.errors[0]
  } catch (error) {
    dispatch(ACTIONS.authError())
    return error
  }
}

export const logoutUser = async (dispatch) => {
  dispatch(ACTIONS.logout())
  Cookies.remove('token')
}
