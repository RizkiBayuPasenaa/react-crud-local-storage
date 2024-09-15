import React from 'react';
import Button from '../components/Button';

const Card = ({ product, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img src={product.imgURL} alt={product.nama} className="card-img" />
      <div className="card-body">
        <h3>{product.nama}</h3>
        <p>{product.deskripsi}</p>
        <p>Harga: Rp {product.harga}</p>
        <div className="card-actions">
          <Button onClick={() => onEdit(product)} text="Edit" className="btn-edit" />
          <Button onClick={() => onDelete(product.id)} text="Delete" className="btn-delete" />
        </div>
      </div>
    </div>
  );
};

export default Card;
