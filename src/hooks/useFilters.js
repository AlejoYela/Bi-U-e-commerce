import { useContext } from "react";
import { FiltersContext } from "../context/Filters";

export function useFilters (){
    const [filters, setFilters] = useContext(FiltersContext)

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

    return {filters, filteredProducts, setFilters}
}