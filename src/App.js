import React, { useState, useEffect } from 'react';
import ProductList from './layouts/ProductList';
import ModalForm from './layouts/ModalForm';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // Load data dari local storage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      // Jika local storage kosong, set data dummy
      setProducts([
        {
          id: 1,
          nama: 'Avanza',
          deskripsi: 'Mobil yang tahan lama dan awet',
          harga: 250000000,
          imgURL: 'https://www.mpm-rent.com/_next/image?url=https%3A%2F%2Fcms.mpm-rent.com%2Fapi%2Fshow-image%3Fpath_file%3Dnews%2F3%2F1695786549.webp&w=640&q=75',
        },
        {
          id: 2,
          nama: 'Xenia',
          deskripsi: 'Mobil keluarga dengan kenyamanan',
          harga: 220000000,
          imgURL: 'https://images.prod.seva.id/Daihatsu/All%20New%20Xenia/main_color/black.png',
        },
        {
          id: 3,
          nama: 'Innova',
          deskripsi: 'Mobil premium dengan kualitas terbaik',
          harga: 350000000,
          imgURL: 'https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/innova-hybrid-giias.jpg',
        },
        {
          id: 4,
          nama: 'Fortuner',
          deskripsi: 'SUV tangguh dan mewah',
          harga: 500000000,
          imgURL: 'https://medias.auto2000.co.id/sys-master-hybrismedia/h95/h2d/8832097812510/fortuner.png',
        },
        {
          id: 5,
          nama: 'Pajero',
          deskripsi: 'SUV premium dengan performa tinggi',
          harga: 600000000,
          imgURL: 'https://mitsubishipalembangsumsel.com/wp-content/uploads/2016/11/New-pajero-sport.png',
        }
      ]);
    }
  }, []);

  // Simpan data ke local storage setiap kali ada perubahan produk
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    setEditProduct(null); // Untuk memastikan form kosong
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditProduct(product); // Isi form dengan data produk yang akan diedit
    setIsModalOpen(true);
  };

  const handleSaveProduct = (newProduct) => {
    if (editProduct) {
      // Jika sedang edit, update produk
      setProducts(products.map((p) => (p.id === editProduct.id ? newProduct : p)));
    } else {
      // Jika produk baru, tambahkan produk
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="app">
        <h1>CRUD Local Storage Penjualan Mobil</h1>
        <Button onClick={handleAddProduct} text="Add Product" className="btn-add" />
        <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
        
        {/* ModalForm untuk menambah atau mengedit produk */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveProduct}
          initialData={editProduct}
        />
      </div>
      <div className="footer">
        <p>&copy; 2023-2024 CRUD Penjualan Mobil. <a href="/" target='blank'>RizkiBayuPasena</a></p>
      </div>
    </>
  );
};

export default App;
