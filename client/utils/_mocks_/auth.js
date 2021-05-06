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
      return data.register
    }
    dispatch(ACTIONS.authError())
    return data.errors[o]
  } catch (error) {
    dispatch(ACTIONS.authError())
    return error
  }
}

export const loginUser = async (dispatch, login, payload) => {
  try {
    dispatch(ACTIONS.requestAuth())
    const { data } = await login({
      variables: {
        input: payload,
      },
    })
    if (data.login?.user) {
      dispatch(ACTIONS.authSuccess(data.login))
      return data.login
    }
    dispatch(ACTIONS.authError())
    return data.errors[o]
  } catch (error) {
    dispatch(ACTIONS.authError())
    return error
  }
}

export const logoutUser = async (dispatch) => {
  dispatch(ACTIONS.logout())
  Cookies.remove('token')
}
