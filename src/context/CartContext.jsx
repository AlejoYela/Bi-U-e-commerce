import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState, CART_ACTIONS_TYPES } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTIONS_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const isProductInCart = product => dispatch({
    type: CART_ACTIONS_TYPES.IS_PRODUCT_IN_CART,
    payload: product
  })

  const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart, isProductInCart }
}

// Provider

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, isProductInCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      isProductInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
