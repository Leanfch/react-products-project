import type { Product } from '../interface/ProductInterface.ts';
import ProductCard from './ProductCard.tsx';

interface ProductListProps {
    products: Product[];
    onProductSelect: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductSelect }) => {
    if (products.length === 0) {
        return <p className='noProducts'>Lo sentimos, no se encontraron productos</p>;
    }
    return (
        <div className='productsListContainer'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} onProductClick={onProductSelect}/>
            ))}
        </div>
    )
}

export default ProductList