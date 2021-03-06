import { useState } from "react";

import "../styles/Products.css";
import importImages from "../functions/importImages";

// Import images
const allProductsImgs = importImages(
  require.context("../images/products", false, /\.(png|jpe?g|svg)$/)
);

// Organize images by type
const allImgs = {
  guitars: Object.values(allProductsImgs).filter((x) => x.includes("guitar")),
  basses: Object.values(allProductsImgs).filter((x) => x.includes("bass")),
  mandolins: Object.values(allProductsImgs).filter((x) => x.includes("mando"))
};

const info = {
  basses: [
    ["Taylor", "5-String Acoustic Bass", 329.99],
    ["Fender", "Acoustic Bass", 149.99],
    ["Fender", "Acoustic Bass w/ cutaway", 199.99],
    ["Breedlove", "Acoustic Bass - Sunburst", 439.99]
  ],
  guitars: [
    ["Fender", "Acoustic Guitar E4303", 149.99],
    ["Lowden", "Acoustic Guitar", 739.99],
    ["Ovation", "Acoustic / Electric Guitar", 209.99],
    ["Asturias", "Spanish Classical Guitar", 1099.99]
  ],
  mandolins: [
    ["Loar", "Mandolin A-Style", 199.99],
    ["Eastman", "Mandolin - F-Style", 399.99],
    ["McNeela", "Mandolin", 599.99],
    ["Kentucky", "Mandolin - Trinity", 299.99]
  ]
};

const Product = (props) => {
  const handlePurchaseClick = () => {
    return props.updateParent(props);
  };
  const images = allImgs[props.category];

  return (
    <div className='Product'>
      <img
        src={images[props.num]}
        alt={props.model}
        className='product__img'
        style={{ height: 300 }}
      />
      <div className='product__info__container'>
        <div>
          <h3>{props.model}</h3>
          <p className='company__name'>{props.company}</p>
        </div>
        <div>
          <p className='product__price'>
            ${props.price.toLocaleString("en-US")}
          </p>
          <button onClick={handlePurchaseClick} type='button'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductPage = (props) => {
  const updateParent = (value) => props.updateGrandparent(value);

  return (
    <div category={props.category} className='ProductPage'>
      <h1>{props.category.toUpperCase()}</h1>
      <div className='product__container'>
        <Product
          updateParent={updateParent}
          category={props.category}
          num={0}
          company={info[props.category][0][0]}
          model={info[props.category][0][1]}
          price={info[props.category][0][2]}
        />
        <Product
          updateParent={updateParent}
          category={props.category}
          num={1}
          company={info[props.category][1][0]}
          model={info[props.category][1][1]}
          price={info[props.category][1][2]}
        />
        <Product
          updateParent={updateParent}
          category={props.category}
          num={2}
          company={info[props.category][2][0]}
          model={info[props.category][2][1]}
          price={info[props.category][2][2]}
        />
        <Product
          updateParent={updateParent}
          category={props.category}
          num={3}
          company={info[props.category][3][0]}
          model={info[props.category][3][1]}
          price={info[props.category][3][2]}
        />
      </div>
    </div>
  );
};

const Products = (props) => {
  const [page, setPage] = useState("guitars");

  const updateGrandparent = (value) => props.updateCart(value);
  const changeTab = (e) => {
    setPage(e.target.id);
  };

  return (
    <div className='Products'>
      <div className='product__nav'>
        <button
          onClick={changeTab}
          type='button'
          className='btn--products'
          id='guitars'
        >
          Guitars
        </button>
        <button
          onClick={changeTab}
          type='button'
          className='btn--products'
          id='mandolins'
        >
          Mandolins
        </button>
        <button
          onClick={changeTab}
          type='button'
          className='btn--products'
          id='basses'
        >
          Basses
        </button>
      </div>
      <ProductPage updateGrandparent={updateGrandparent} category={page} />
    </div>
  );
};

export default Products;
