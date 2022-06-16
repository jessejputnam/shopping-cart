const Item = (props) => {
  return (
    <div className='Item'>
      <img src={props.src} alt={props.alt}></img>
      <div className='item__row--0'>
        <h3>{props.company}</h3>
        <p>{props.price}</p>
      </div>
      <div className='item__row--1'>
        <p>{props.model}</p>
      </div>
      <div className='item__row--2'></div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <div className='Cart'>
      <Item />
    </div>
  );
};

export default Cart;
