import { createContext, useReducer } from 'react'
import { favReducer, favInitialState, FAV_ACTION_TYPES } from '../reducers/fav'

export const FavContext = createContext()

function useFavReducer () {
  const [state, dispatch] = useReducer(favReducer, favInitialState)

  const addToFav = product => dispatch({
    type: FAV_ACTION_TYPES.ADD_TO_FAV,
    payload: product
  })

  const removeFromFav = product => dispatch({
    type: FAV_ACTION_TYPES.REMOVE_FROM_FAV,
    payload: product
  })

  const clearFav = () => dispatch({ type: FAV_ACTION_TYPES.CLEAR_FAV })

  return { state, addToFav, removeFromFav, clearFav }
}

// Provider

export function FavProvider ({ children }) {
  const { state, addToFav, removeFromFav, clearFav } = useFavReducer()

  return (
    <FavContext.Provider value={{
      fav: state,
      addToFav,
      removeFromFav,
      clearFav
    }}
    >
      {children}
    </FavContext.Provider>
  )
}
