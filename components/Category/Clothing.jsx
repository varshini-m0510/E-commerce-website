import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Products from '../Products/Products';

const Clothing = () => {
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');

    const productData = [
        {
          "id": 1,
          "name": "Black Sports Shoes",
          "imageSrc": "/images/product-1.jpg",
          "category": "Footwear",
          "price": 100.00
        },
        {
          "id": 2,
          "name": "Headphones",
          "imageSrc": "/images/product-5.jpg",
          "category": "Electronics",
          "price": 230.00
        },
        {
          "id": 3,
          "name": "Red White Striped Black Shirt",
          "imageSrc": "/images/product-3.jpg",
          "category": "Clothing",
          "price": 80.00
        },
        {
          "id": 4,
          "name": "Dark Blue Full Length Jeans",
          "imageSrc": "/images/product-6.jpg",
          "category": "Clothing",
          "price": 110.00
        },
        {
          "id": 5,
          "name": "Navy Blue Formal Pants",
          "imageSrc": "/images/product-4.jpg",
          "category": "Clothing",
          "price": 120.00
        },
        {
          "id": 6,
          "name": "Mustard Yellow Full Sleeves Top",
          "imageSrc": "/images/product-7.jpg",
          "category": "Clothing",
          "price": 50.00
        },
        {
          "id": 7,
          "name": "Light Blue Full Length Jeans",
          "imageSrc": "/images/product-8.jpg",
          "category": "Clothing",
          "price": 180.00
        },
        {
          "id": 8,
          "name": "Black Shoes",
          "imageSrc": "/images/product-9.jpg",
          "category": "Footwear",
          "price": 200.00
        },
        {
          "id": 9,
          "name": "Stripped Formal Shirt",
          "imageSrc": "/images/product-10.jpg",
          "category": "Clothing",
          "price": 80.00
        },
        {
          "id": 10,
          "name": "Pink Smartwatch",
          "imageSrc": "/images/product-2.jpg",
          "category": "Electronics",
          "price": 220.00
        },
        {
            "id": 11,
            "name": "Black Striped White Sneakers",
            "imageSrc": "/images/product-11.jpg",
            "category": "Footwear",
            "price": 120.00
        },
        {
            "id": 12,
            "name": "Black Smartwatch",
            "imageSrc": "/images/product-12.jpg",
            "category": "Electronics",
            "price": 250.00
        },
        {
            "id": 13,
            "name": "Formal Shirt",
            "imageSrc": "/images/product-13.jpg",
            "category": "Clothing",
            "price": 200.00
        },
        {
            "id": 14,
            "name": "Blue Formal Shirt",
            "imageSrc": "/images/product-14.jpg",
            "category": "Clothing",
            "price": 130.00
        },
        {
            "id": 15,
            "name": "White Sports Shoes",
            "imageSrc": "/images/category-2.jpg",
            "category": "Footwear",
            "price": 220.00
        },
        {
            "id": 16,
            "name": "Couple Smartwatches",
            "imageSrc": "/images/category-3.jpg",
            "category": "Electronics",
            "price": 400.00
        },
      ]
      useEffect(() => {
        const clothingProducts = productData.filter(product => product.category === 'Clothing');
        setSortedProducts(clothingProducts);
      }, []);    
  return (
    <div>
        <Header />
        <Products products={sortedProducts} sortOption={sortOption} />
        <Footer />
    </div>
  )
}

export default Clothing