import { useState, useMemo } from 'react';
import useFetchingProducts from '../src/hooks/useFetchingProducts.ts';
import type { Product } from './interface/ProductInterface.ts';
import ProductDetails from './components/ProductDetails.tsx';
import ProductList from './components/ProductList.tsx';
import SearchBar from './components/SearchBar.tsx';
import "./App.css";

export const App = () => {
    const { data: products, loading, error } = useFetchingProducts('https://fakestoreapi.com/products');
    const [ searchTerm, setSearchTerm ] = useState<string>('');
    const [ selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const filteredProducts = useMemo(() => {
        if(!products) return [];
        return products.filter(product => {
            return product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        })
    }, [products, searchTerm])

    const handleProductSelect = ( product: Product ) => {
        setSelectedProduct(product)
    }

    const handleBackToList = () => {
        setSelectedProduct(null);
        setSearchTerm('');
    }

    if(loading) return <div className='loading'><p>Cargando Productos...</p></div>
    if(error) return <div className='error'>Error: { error.message }</div>
    return (
        <div className='container'>
            <h1>Mini E-commerce</h1>
            {!selectedProduct ? (
                <>
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
                    {console.log( filteredProducts )}
                    <ProductList products={filteredProducts} onProductSelect={handleProductSelect}/>
                </>
            ) : (
                <ProductDetails product={selectedProduct} onBackToList={handleBackToList}/>
            )}
        </div>
    )
}

export default App