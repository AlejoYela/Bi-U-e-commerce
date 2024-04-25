export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR-CART',
  IS_PRODUCT_IN_CART: 'IS_PRODUCT_IN_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      return cartInitialState
    }

    case CART_ACTIONS_TYPES.IS_PRODUCT_IN_CART: {
      const { id } = actionPayload
      return state.some(item => item.id === id)
    }

    default: {
      break
    }
  }

  return state
}
