import notes from "../images/musical-notes.png";
import emptyCart from "../images/cart-empty.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className='Header'>
      <img src={notes} alt='Logo' className='logo'></img>
      <h1 className='store__name'>String Theory</h1>
      <button type='button' className='cart'>
        <img src={emptyCart} alt='Shopping cart'></img>
      </button>
    </div>
  );
};

export default Header;
