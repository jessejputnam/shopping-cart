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
  const handleDel = (e) => {
    return props.updateParentDel(
      e.target.parentElement.parentElement.parentElement.id
    );
  };
  const handleSub = (e) => {
    return props.updateParentSub(
      e.target.parentElement.parentElement.parentElement.parentElement.id
    );
  };
  const handleAdd = (e) => {
    return props.updateParentAdd(
      e.target.parentElement.parentElement.parentElement.id
    );
  };

  return (
    <div className='Item' id={props.arrindex}>
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
          <button onClick={handleDel} type='button' className='btn--del'>
            DEL
          </button>
          <button
            onClick={handleSub}
            type='button'
            className='btn--count btn--remove'
          >
            <strong>&ndash;</strong>
          </button>
          <p className='item--count'>{props.count}</p>
          <button
            onClick={handleAdd}
            type='button'
            className='btn--count btn--add'
          >
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

  const updateParentDel = (value) => props.updateDel(value);
  const updateParentSub = (value) => props.updateSub(value);
  const updateParentAdd = (value) => props.updateAdd(value);

  const cartTotal =
    props.cartItems.length === 0
      ? 0
      : props.cartItems
          .map((item) => item.price * item.count)
          .reduce((a, b) => a + b, 0);

  const cartItems = props.cartItems.map((item, index) => (
    <Item
      updateParentDel={updateParentDel}
      updateParentSub={updateParentSub}
      updateParentAdd={updateParentAdd}
      key={uniqid()}
      arrindex={index}
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
        Total: <strong>${cartTotal.toLocaleString("en-US")}</strong>
      </p>
      <button className='btn--checkout' type='button'>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
