import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";

import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleCartBtn = () => {
    document.querySelector(".Cart").classList.toggle("Cart--hidden");
  };

  return (
    <div className='App'>
      <Header cartClick={handleCartBtn} cartItems={cart} />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
