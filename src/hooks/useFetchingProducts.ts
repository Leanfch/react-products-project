import { useState, useEffect } from 'react';
import type { Product, ProductsApiResponse } from '../interface/ProductInterface';

interface UseFetchResult {
    data: Product[] | null;
    loading: boolean;
    error: Error | null;
}

const useFetchingProducts = ( url : string ): UseFetchResult => {
    const [data, setData] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const apiResponse: ProductsApiResponse = await response.json();
                
                setData(apiResponse.products);
            } catch (err: unknown) {
                if (err instanceof Error ) {
                    setError(err);
                } else {
                    setError(new Error("Ocurrió un error desconocido"));
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return {data, loading, error}
}

export default useFetchingProducts;