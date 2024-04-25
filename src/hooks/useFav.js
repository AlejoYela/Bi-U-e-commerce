import { useContext } from 'react'
import { FavContext } from '../context/FavContext'

export const useFav = () => {
  const context = useContext(FavContext)

  if (context === undefined) {
    throw new Error('useFav must be within a FavProvider')
  }

  return context
}
