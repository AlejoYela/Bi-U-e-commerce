import { useContext } from "react";
import { FiltersContext } from "../context/Filters";

export function useFilters (){
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

    const filteredProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && product.price <= filters.maxPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            );
        });
    };

    return {filters, filteredProducts, setFilters, handlePrecioMaxChange, handlePrecioMinChange}
}