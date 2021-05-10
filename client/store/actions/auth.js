import * as ACTION_TYPES from '../types/auth'

export const requestAuth = () => {
  return {
    type: ACTION_TYPES.REQUEST_AUTH,
  }
}

export const authSuccess = (value) => {
  return {
    type: ACTION_TYPES.AUTH_SUCCESS,
    payload: value,
  }
}

export const authError = () => {
  return {
    type: ACTION_TYPES.AUTH_ERROR,
  }
}

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  }
}
