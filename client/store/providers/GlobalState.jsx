import React, { useReducer } from 'react'
import Context from '../controllers/Context'
import reducer from '../reducers/reducer'
import DATA from '../../graphql/queries/Data'
import { useQuery } from '@apollo/client'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_QUANTITY,
  ADD_QUANTITY,
} from '../types/types'

export default function GlobalState(props) {
  const { data, loading, error } = useQuery(DATA)

  const [state, dispatch] = useReducer(reducer, { carts: [] })

  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    })
  }

  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    })
  }

  const removeQuantity = (productID) => {
    dispatch({
      type: REMOVE_QUANTITY,
      payload: productID,
    })
  }

  const addQuantity = (productID) => {
    dispatch({
      type: ADD_QUANTITY,
      payload: productID,
    })
  }

  return (
    <Context.Provider
      value={{
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        removeQuantity: removeQuantity,
        addQuantity: addQuantity,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
