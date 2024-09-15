import React from 'react';
import Card from './Card';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
