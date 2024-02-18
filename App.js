import React, { createContext, useContext, useState }from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Footwear from "./components/Category/Footwear";
import Electronics from "./components/Category/Electronics";
import Clothing from "./components/Category/Clothing";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ Products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/Product" element={ <Product />}/>
        <Route path="/Category" element={ <Category />}/>
        <Route path="/Footwear" element={ <Footwear />}/>
        <Route path="/Electronics" element={ <Electronics />}/>
        <Route path="/Clothing" element={ <Clothing />}/>
        <Route path="/Contact" element={ <Contact />}/>
        <Route path="/Cart" element={ <Cart />}/>
      </Routes>
    </ProductsProvider>
  );
}

export { ProductsContext };

export default App;
