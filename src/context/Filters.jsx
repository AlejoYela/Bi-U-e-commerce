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
    const [loading, setLoading] = useState(true);

    return (
        <FiltersContext.Provider value={[
            filters,
            setFilters,
            loading, // Agrega el estado de carga al valor del contexto
            setLoading // Agrega la función para establecer el estado de carga
        ]}
        >
            {children}
        </FiltersContext.Provider>
    )
}

