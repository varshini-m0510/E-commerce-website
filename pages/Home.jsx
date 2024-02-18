import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from '../components/Home/Head';

import "./Home.css"
import "./Products.css"
import "./Category.css"
import Categories from '../components/Category/Categories';
import Products from '../components/Products/Products';

const Home = () => {
    const productData1 = [
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
            "id": 1,
            "name": "Dark Blue Full Length Jeans",
            "imageSrc": "/images/product-6.jpg",
            "category": "Clothing",
            "price": 110.00
          },
          {
            "id": 2,
            "name": "Navy Blue Formal Pants",
            "imageSrc": "/images/product-4.jpg",
            "category": "Clothing",
            "price": 120.00
          },
          {
            "id": 3,
            "name": "Mustard Yellow Full Sleves Top",
            "imageSrc": "/images/product-7.jpg",
            "category": "Clothing",
            "price": 50.00
          }
    ]
  return (
    <div>
        <Header />
        <Head />
        <Categories />
        <h2 class="title"><b>Featured Products</b></h2>
        <Products products={productData1} />
        <Footer />
    </div>
  )
}

export default Home