import "../styles/Cart.css";
import uniqid from "uniqid";

import importImages from "../functions/importImages";
import btnClose from "../images/close-icon.svg";

// Import Images
const allProductsThumbs = importImages(
  require.context("../images/products/thumbs", false, /\.(png|jpe?g|svg)$/)
);

const allThumbs = {
  guitars: Object.entries(allProductsThumbs).filter((x) =>
    x[0].includes("guitar")
  ),
  basses: Object.entries(allProductsThumbs).filter((x) =>
    x[0].includes("bass")
  ),
  mandolins: Object.entries(allProductsThumbs).filter((x) =>
    x[0].includes("mando")
  )
};

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
          <button type='button' className='btn--del'>
            DEL
          </button>
          <button type='button' className='btn--count btn--remove'>
            <strong>&ndash;</strong>
          </button>
          <p className='item--count'>{props.count}</p>
          <button type='button' className='btn--count btn--remove'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const closeCart = () => {
    document.querySelector(".Cart").classList.add("Cart--hidden");
  };

  const cartTotal =
    props.cartItems.length === 0
      ? 0
      : props.cartItems
          .map((item) => item.price * item.count)
          .reduce((a, b) => a + b, 0);

  const cartItems = props.cartItems.map((item) => (
    <Item
      key={uniqid()}
      src={allThumbs[item.category][item.index][1]}
      alt={item.model}
      company={item.company}
      model={item.model}
      price={item.price}
      count={item.count}
    />
  ));

  return (
    <div className='Cart Cart--hidden'>
      <button onClick={closeCart} type='button' className='btn--close'>
        <img src={btnClose} alt='Close'></img>
      </button>
      <h2>Shopping Cart</h2>
      {cartItems}
      <p className='total__price'>
        Total: ${cartTotal.toLocaleString("en-US")}
      </p>
      <button className='btn--checkout' type='button'>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
