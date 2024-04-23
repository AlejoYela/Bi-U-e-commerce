import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export function useProducts() {
    const [loading, setLoading] = useState(true)
    const products = useContext(ProductsContext);

    return {products, loading, setLoading};
}
