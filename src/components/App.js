import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";

import "../styles/App.css";

const updateCartData = (cart, value) => {
  let isItemInCart = false;

  for (let item of cart) {
    if (item.model === value.model) {
      item.count++;
      isItemInCart = true;
    }
  }

  if (isItemInCart === false) {
    return [
      ...cart,
      {
        category: value.category,
        model: value.model,
        company: value.company,
        price: value.price,
        index: value.num,
        count: 1
      }
    ];
  } else return cart;
};

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (value) => {
    const newCart = updateCartData(cart, value);
    setCart(newCart);
    console.log(cart);
  };
  const handleCartBtn = () => {
    document.querySelector(".Cart").classList.toggle("Cart--hidden");
  };

  return (
    <div className='App'>
      <Header cartClick={handleCartBtn} cartItems={cart} />
      <Cart cartItems={cart} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/products'
          element={<Products updateCart={updateCart} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
