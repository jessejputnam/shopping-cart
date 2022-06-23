// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CSS Imports
// import "firebaseui/dist/firebaseui.css";
import "./styles/index.css";

// Component Imports
import App from "./components/App";

// #######################
// ## FIREBASE FUNCTIONS
// ######################

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.default.auth());
// // Set up sign-in methods
// ui.start("#firebaseui-auth-container", {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ]
// });

// #######################
// ## COMPONENT DOM
// #######################

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
