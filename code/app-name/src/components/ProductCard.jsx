import React from 'react'

const ProductCard = ({ product, addToCart, addToFavorites }) => {
  return (
    <div style={{ border: "1px solid #1b0101", padding: "10px" }}>
      <img style={{width:"70px"}} src={product.image}  alt={product.title} />
      <h4>{product.title}</h4>
      <h4>{product.price} $</h4>
      <button onClick={() => addToCart(product)}>🛒cart</button>
      <button onClick={() => addToFavorites(product)}>❤️ Add to Fav</button>
    </div>
  )
}

export default ProductCard