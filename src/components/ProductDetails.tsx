import type { Product } from '../interface/ProductInterface';

interface ProductDetailProps {
    product: Product;
    onBackToList: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackToList }) => {
    return (
        <article className='productDetails' style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <button onClick={onBackToList} style={{ padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                ← Volver a la lista
            </button>    
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                <div style={{width: '300px', height: '300px'}}>
                    <img src={product.images[0]} alt={product.title} style={{ aspectRatio: '1/1' ,maxWidth: '300px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} width={'300px'} height={'300px'}/>
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <p className='price'>${product.price.toFixed(2)}</p>
                    <p><strong>Categoría: </strong> { product.category }</p>
                    <p><strong>Descripción: </strong> { product.description }</p>
                    <p><strong>Rating: </strong> { product.rating }</p>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail;