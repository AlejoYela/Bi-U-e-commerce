export const favInitialState = JSON.parse(window.localStorage.getItem('fav')) || []

export const FAV_ACTION_TYPES = {
  ADD_TO_FAV: 'ADD_TO_FAV',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
  CLEAR_FAV: 'CLEAR_FAV'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('fav', JSON.stringify(state))
}

export const favReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case FAV_ACTION_TYPES.ADD_TO_FAV: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case FAV_ACTION_TYPES.REMOVE_FROM_FAV: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case FAV_ACTION_TYPES.CLEAR_FAV: {
      updateLocalStorage(favInitialState)
      return favInitialState
    }

    default: {
      break
    }
  }

  return state
}
