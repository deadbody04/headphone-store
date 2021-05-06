import { Reducer } from 'react'
import Cookies from 'js-cookie'

import * as ACTION_TYPES from '../types/auth'

export const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  token: '',
  avatar: '',
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_AUTH: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTION_TYPES.AUTH_SUCCESS: {
      return {
        isAuthenticated: true,
        loading: true,
        user: action.payload.user,
        token: action.payload.token || state.token || Cookies('token'),
      }
    }
    case ACTION_TYPES.AUTH_ERROR: {
      return {
        isAuthenticated: false,
        loading: false,
      }
    }
    case ACTION_TYPES.LOGOUT: {
      return {
        user: null,
        token: null,
      }
    }
    default:
      return state
  }
}
