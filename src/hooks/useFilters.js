import { useContext } from "react";
import { FiltersContext } from "../context/Filters";

export function useFilters() {
    const [filters, setFilters] = useContext(FiltersContext)

    const handlePrecioMinChange = (event) => {
        const value = parseInt(event.target.value);
        setFilters({
            ...filters,
            minPrice: value
        })
    };

    const handlePrecioMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setFilters({
            ...filters,
            maxPrice: value
        })
    };

    const handleCategoryFilter = (event) => {
        const { checked } = event.target;
        const category = event.target.getAttribute('data-category');

        setFilters(prevFilters => {
            if (checked) {
                return { ...prevFilters, category };
            } else {
                return prevFilters.category === category ? { ...prevFilters, category: 'all' } : prevFilters;
            }
        });
    }

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setFilters({
            ...filters,
            search: searchTerm
        });
    };

    const filteredProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                product.price <= filters.maxPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                ) &&
                (
                    filters.search === '' ||
                    product.name.toLowerCase().includes(filters.search.toLowerCase())
                )
            );
        });
    };

    return { filters, filteredProducts, setFilters, handlePrecioMaxChange, handlePrecioMinChange, handleCategoryFilter, handleSearchChange }
}