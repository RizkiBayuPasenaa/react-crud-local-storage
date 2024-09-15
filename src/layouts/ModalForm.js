import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';


const ModalForm = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    nama: '',
    deskripsi: '',
    harga: '',
    imgURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{initialData ? "Edit Product" : "Add Product"}</h2>
        
        <Input
          label="Nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
        />
        
        <Input
          label="Deskripsi"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
        />
        
        <Input
          label="Harga"
          name="harga"
          type="number"
          value={formData.harga}
          onChange={handleChange}
        />
        
        <Input
          label="Image URL"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleChange}
        />

        <div className="modal-actions">
          <Button onClick={onClose} text="Cancel" className="btn-cancel" />
          <Button onClick={handleSave} text="Save" className="btn-save" />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
