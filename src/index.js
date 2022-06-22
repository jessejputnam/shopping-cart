import { initializeApp } from "firebase/app";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./styles/index.css";

import App from "./components/App";

const firebaseConfig = {
  apiKey: "AIzaSyBjDNx6XJ5QHq5DO_8J_tY_TFVXNhKj3Oo",
  authDomain: "shopping-cart-e8c29.firebaseapp.com",
  projectId: "shopping-cart-e8c29",
  storageBucket: "shopping-cart-e8c29.appspot.com",
  messagingSenderId: "223666989783",
  appId: "1:223666989783:web:2e890d6430e7ff6111de92"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
