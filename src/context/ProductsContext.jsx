import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// 1. Crear el contexto
export const ProductsContext = createContext();

// 2. Crear el provider
export function ProductsProvider({ children }) {
    // Estado para almacenar los productos
    const [products, setProducts] = useState([]);

    // Función para obtener los productos mediante Axios
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4321/productos'); // Modifica la URL según tu endpoint
            setProducts(response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    // Efecto para cargar los productos al montar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}
