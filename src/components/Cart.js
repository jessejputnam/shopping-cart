import "../styles/Cart.css";

import btnClose from "../images/close-icon.svg";

import removeIcon from "../images/remove-icon.svg";
import addIcon from "../images/add-icon.svg";
import bass0 from "../images/products/bass-5string.jpg";
import bassThumb0 from "../images/products/thumbs/bass-5string-thumb.jpg";

const Item = (props) => {
  return (
    <div className='Item'>
      <img src={props.src} alt={props.alt} className='product__thumb'></img>
      <div className='item__info'>
        <div className='item__row--0'>
          <h3>{props.company}</h3>
          <p>${props.price}</p>
        </div>
        <div className='item__row--1'>
          <p>{props.model}</p>
        </div>
        <div className='item__row--2'>
          <img height={15} width={15} src={removeIcon} alt='Remove item'></img>
          <input type='number' min={0} class='input--num'></input>
        </div>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const closeCart = () => {
    document.querySelector(".Cart").classList.add("Cart--hidden");
  };

  return (
    <div className='Cart'>
      <button onClick={closeCart} type='button' className='btn--close'>
        <img src={btnClose} alt='Close'></img>
      </button>
      <h2>Shopping Cart</h2>
      <Item
        src={bassThumb0}
        alt='5 String Bass'
        company='Ibanez'
        model='AEB209C 5-String Acoustic/Electric Bass'
        price={399.99}
      />
    </div>
  );
};

export default Cart;
