// Import images from folder
const importImages = function (allImgs) {
  let images = {};
  allImgs
    .keys()
    .map((item, index) => (images[item.replace("./", "")] = allImgs(item)));
  return images;
};

export default importImages;
