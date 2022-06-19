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
  const images = allImgs[props.category];

  return (
    <div className='Product'>
      <img src={images[props.num]} alt={props.model} className='product__img' />
      <div className='product__info__container'>
        <div>
          <h3>{props.model}</h3>
          <p style={{ fontStyle: "italic" }}>{props.company}</p>
        </div>
        <div>
          <p>${props.price}</p>
          <button type='button'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const ProductPage = (props) => {
  return (
    <div type={props.category} className='ProductPage'>
      <h1>{props.category}</h1>
      <div className='product__container'>
        <Product
          category={props.category}
          num={0}
          company={info[props.category][0][0]}
          model={info[props.category][0][1]}
          price={info[props.category][0][2]}
        />
        <Product
          category={props.category}
          num={1}
          company={info[props.category][1][0]}
          model={info[props.category][1][1]}
          price={info[props.category][1][2]}
        />
        <Product
          category={props.category}
          num={2}
          company={info[props.category][2][0]}
          model={info[props.category][2][1]}
          price={info[props.category][2][2]}
        />
        <Product
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

const Products = () => {
  const [page, setPage] = useState("guitars");

  return (
    <div className='Products'>
      <div className='product__nav'>
        <button type='button' className='btn--products' id='guitar'>
          Guitars
        </button>
        <button type='button' className='btn--products' id='mandolin'>
          Mandolins
        </button>
        <button type='button' className='btn--products' id='bass'>
          Basses
        </button>
      </div>
      <ProductPage category={page} />
    </div>
  );
};

export default Products;
