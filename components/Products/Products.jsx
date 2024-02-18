import React, { useState, useEffect, createContext, useContext }  from 'react';
import { ProductsContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Products = ({ products, sortOption }) => {
  const navigate = useNavigate();
  const [sortedProducts, setSortedProducts] = useState(products);
  const { Products, setProducts } = useContext(ProductsContext);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    navigate('/Cart')    
  };

  useEffect(() => {
    if (sortOption === 'price-low-to-high') {
      const sortedByPriceLowToHigh = [...products].sort((a, b) => a.price - b.price);
      setSortedProducts(sortedByPriceLowToHigh);
    } else if (sortOption === 'price-high-to-low') {
      const sortedByPriceHighToLow = [...products].sort((a, b) => b.price - a.price);
      setSortedProducts(sortedByPriceHighToLow);
    } else {
      setSortedProducts(products);
    }
  }, [products, sortOption]);

  return (
    <div className="row">
      {sortedProducts.map((product) => (
        <div className="col-4" key={product.id}>
          <img src={product?.imageSrc} width="80px" alt="" />
          <h4>{product?.name}</h4>
          <p>${product?.price.toFixed(2)}</p>
          <button className="add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
