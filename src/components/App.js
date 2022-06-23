import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import "../styles/App.css";

// ############# FIREBASE #############
import Firebase from "../Firebase";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(Firebase);

const db = getFirestore(Firebase);

// ################################################################
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
  } else {
    return [...cart];
  }
};

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [modal, setModal] = useState("signup");

  const updateCart = (value) => {
    const newCart = updateCartData(cart, value);
    setCart(newCart);
  };

  const updateDel = (value) => {
    const newCart = cart.slice();
    newCart.splice(value, 1);
    setCart(newCart);
  };

  const updateSub = (value) => {
    const newCart = cart.slice();
    if (newCart[value].count < 1.1) return;
    newCart[value].count--;
    setCart(newCart);
  };

  const updateAdd = (value) => {
    const newCart = cart.slice();
    newCart[value].count++;
    setCart(newCart);
  };

  const handleCartBtn = () => {
    document.querySelector(".Cart").classList.toggle("Cart--hidden");
  };

  const changeModalType = (value) => {
    setModal(value);
  };

  const getSignUpData = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => (count += item.count));
    setCartCount(count);
  }, [cart]);

  let modalWindow;
  if (modal === "signup")
    modalWindow = (
      <SignUp modalType={changeModalType} signUpData={getSignUpData} />
    );
  if (modal === "signin") modalWindow = <SignIn modalType={changeModalType} />;
  if (modal === "none") modalWindow = null;

  return (
    <div className='App'>
      <Header
        cartCount={cartCount}
        cartClick={handleCartBtn}
        cartItems={cart}
      />
      {modalWindow}
      {/* <SignUp modalType={changeModalType} signUpData={getSignUpData} /> */}
      <Cart
        updateSub={updateSub}
        updateAdd={updateAdd}
        updateDel={updateDel}
        cartItems={cart}
      />
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
