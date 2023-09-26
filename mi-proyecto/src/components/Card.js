import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title.rendered}</h3>
      <p>Categoría: {product.categories.join(', ')}</p>
      
    </div>
  );
};

export default Card;

