import React, { createContext, useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../../App';

const Bill = () => {
  const { Products, setProducts } = useContext(ProductsContext);
  console.log(Products)
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = Products.reduce((acc, item) => acc + item.price,0);
    setSubtotal(calculatedSubtotal);

    const calculatedTax = calculatedSubtotal * 0.1;
    setTax(calculatedTax);

    const calculatedTotal = calculatedSubtotal + calculatedTax;
    setTotal(calculatedTotal);
  }, [Products]);


  return (
    <div className="small-container cart-page">
      <table id="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>1</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price" id="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td id="subtotal">${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td id="tax">${tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td id="total">${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bill