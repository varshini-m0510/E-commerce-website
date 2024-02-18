import React , { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bill from '../components/Cart/Bill';
import Products from '../components/Products/Products';

import "./Cart.css"

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    return (
      <div>
        <Header />
        <Bill />
        <Footer />
      </div>
    );
}

export default Cart;