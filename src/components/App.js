import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import "../styles/App.css";

// ############# FIREBASE #############
import Firebase from "../Firebase";
// import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const auth = getAuth(Firebase);

// const db = getFirestore(Firebase);

// ################################################################

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
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);

  const testClick = () => {
    console.log("user:", user);
    console.log("uid:", uid);
  };

  const logOut = () => {
    console.log("signout");
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, [user]);

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

  const setSignUpData = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
      })
      // .then(() => setCurrentUser(user))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  const setSignInData = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => (count += item.count));
    setCartCount(count);
  }, [cart]);

  // Signin Modal Window
  let modalWindow;
  if (modal === "signup")
    modalWindow = (
      <SignUp modalType={changeModalType} signUpData={setSignUpData} />
    );
  if (modal === "signin")
    modalWindow = (
      <SignIn modalType={changeModalType} signInData={setSignInData} />
    );
  if (user !== null) modalWindow = null;

  return (
    <div className='App'>
      <div className='account__container'>
        <button onClick={testClick}>Test</button>
        <div>{user !== null ? user.email : "anon"}</div>
        <button type='button' onClick={logOut}>
          Sign Out
        </button>
      </div>
      <Header
        cartCount={cartCount}
        cartClick={handleCartBtn}
        cartItems={cart}
      />
      {modalWindow}
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
