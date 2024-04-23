import { createContext, useState } from "react";

// 1. Crear el contexto
export const FiltersContext = createContext()

// 2. Crear el provider
export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        categoria: 'all',
        minPrice: 0,
        maxPrice: 100000,
        search: ''
    })

    return (
        <FiltersContext.Provider value={[
            filters,
            setFilters
        ]}
        >
            {children}
        </FiltersContext.Provider>
    )
}

