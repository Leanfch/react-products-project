import React, { useCallback } from 'react';
import type { Product } from '../interface/ProductInterface';

interface ProductCardProps {
    product: Product;
    onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onProductClick }) => {
    console.log(`Rendering ProductCard: ${product.title}`);

    const handleCardClick = useCallback(() => {
        onProductClick(product);
    }, [onProductClick, product]);

    return (
        <div
        onClick={handleCardClick}
        style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
            <img src={product.image} alt={`Imagen de ${product.title}`} style={{ maxWidth: '100%', height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
        </div>
    )
})

export default ProductCard;