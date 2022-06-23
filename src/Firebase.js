import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjDNx6XJ5QHq5DO_8J_tY_TFVXNhKj3Oo",
  authDomain: "shopping-cart-e8c29.firebaseapp.com",
  projectId: "shopping-cart-e8c29",
  storageBucket: "shopping-cart-e8c29.appspot.com",
  messagingSenderId: "223666989783",
  appId: "1:223666989783:web:2e890d6430e7ff6111de92"
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;
