import { useNavigate } from "react-router-dom";

import notes from "../images/musical-notes.png";
import emptyCart from "../images/cart-empty.png";
import fullCart from "../images/cart-full.png";

import "../styles/Header.css";
import { useState } from "react";

const Header = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <div className='Header'>
      <img src={notes} alt='Logo' className='logo'></img>
      <h1 onClick={goToHome} className='store__name'>
        String Theory
      </h1>
      <button onClick={props.cartClick} type='button' className='cart'>
        <img
          src={props.cartItems.length === 0 ? emptyCart : fullCart}
          alt='Shopping cart'
        ></img>
        <p className='num__items'>{props.cartCount}</p>
      </button>
    </div>
  );
};

export default Header;
