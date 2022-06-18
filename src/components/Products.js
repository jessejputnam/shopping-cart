import "../styles/Products.css";

// Import images from folder
const importImages = function (allImgs) {
  let images = {};
  allImgs
    .keys()
    .map((item, index) => (images[item.replace("./", "")] = allImgs(item)));
  return images;
};

const allProducts = importImages(
  require.context("../images/products", false, /\.(png|jpe?g|svg)$/)
);

const allProdArr = Object.values(allProducts);

const guitars = allProdArr.filter((x) => x.includes("guitar"));
const basses = allProdArr.filter((x) => x.includes("bass"));
const mandos = allProdArr.filter((x) => x.includes("mando"));

console.log(guitars);
console.log(basses);
console.log(mandos);

const Products = () => {
  return (
    <div className='Products'>
      <div className='product__nav'>
        <button type='button' className='btn--products' id='guitar'></button>
        <button type='button' className='btn--products' id='mandolin'></button>
        <button type='button' className='btn--products' id='bass'></button>
      </div>
      <div className='product__page'>
        <p>Instruments here...</p>
      </div>
    </div>
  );
};

export default Products;
