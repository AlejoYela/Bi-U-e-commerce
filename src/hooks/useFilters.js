import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'

export function useFilters () {
  const [filters, setFilters] = useContext(FiltersContext)

  const handlePrecioMinChange = (event) => {
    const value = parseInt(event.target.value)
    setFilters({
      ...filters,
      minPrice: value
    })
  }

  const handlePrecioMaxChange = (event) => {
    const value = parseInt(event.target.value)
    setFilters({
      ...filters,
      maxPrice: value
    })
  }

  const handleCategoryFilter = (event) => {
    const { checked } = event.target
    const categoria = event.target.getAttribute('data-category')

    setFilters(prevFilters => {
      if (checked) {
        return { ...prevFilters, categoria }
      } else {
        return prevFilters.categoria === categoria ? { ...prevFilters, categoria: 'all' } : prevFilters
      }
    })
  }

  const selectCategory = (category) => {
    setFilters(prevFilters => {
      return { ...prevFilters, categoria: category }
    })
  }

  const selectSubcategory = (subcategory) => {
    setFilters(prevFilters => {
      return { ...prevFilters, subcategoria: subcategory }
    })
  }

  const handleSubcategoryFilter = (event) => {
    const { checked } = event.target
    const subcategoria = event.target.getAttribute('data-category')

    setFilters(prevFilters => {
      if (checked) {
        return { ...prevFilters, subcategoria }
      } else {
        return prevFilters.subcategoria === subcategoria ? { ...prevFilters, subcategoria: 'all' } : prevFilters
      }
    })
  }

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value
    setFilters({
      ...filters,
      search: searchTerm
    })
  }

  const filteredProducts = (products) => {
    return products.filter(product => {
      return (
        product.precio >= filters.minPrice &&
                product.precio <= filters.maxPrice &&
                (
                  filters.categoria === 'all' ||
                    product.categoria === filters.categoria
                ) &&
                (
                  filters.subcategoria === 'all' ||
                    product.subcategoria === filters.subcategoria
                ) &&
                (
                  filters.search === '' ||
                    product.nombre.toLowerCase().includes(filters.search.toLowerCase())
                )
      )
    })
  }

  return { filters, filteredProducts, setFilters, handlePrecioMaxChange, handlePrecioMinChange, handleCategoryFilter, handleSubcategoryFilter, handleSearchChange, selectCategory, selectSubcategory }
}
