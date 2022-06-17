import { useNavigate } from "react-router-dom";

import notes from "../images/musical-notes.png";
import emptyCart from "../images/cart-empty.png";

import "../styles/Header.css";

const Header = (props) => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <div className='Header'>
      <img src={notes} alt='Logo' className='logo'></img>
      <h1 onClick={goToHome} className='store__name'>
        String Theory
      </h1>
      <button onClick={props.cartClick} type='button' className='cart'>
        <img src={emptyCart} alt='Shopping cart'></img>
      </button>
    </div>
  );
};

export default Header;
