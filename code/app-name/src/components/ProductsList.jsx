import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products, addToCart, addToFavorites }) => {
  return (
    <div>
      <h1>ProductsList</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {products.map((product) => {
          return (
            <ProductCard 
              product={product} 
              key={product.id} 
              addToCart={addToCart} 
              addToFavorites={addToFavorites} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;