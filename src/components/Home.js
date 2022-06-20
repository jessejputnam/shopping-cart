import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => navigate("/products");

  return (
    <div className='Home'>
      <div className='home__img'></div>
      <div className='home__shop'>
        <div className='home__shop__wrapper'>
          <h2 className='store__name store__name--large'>String Theory</h2>
          <p>
            <span style={{ fontSize: 24 }} className='store__name'>
              String Theory&copy;
            </span>{" "}
            is dedicated to all your popular music needs &mdash; as long as they
            involve strings! We are a new shop dedicated to bringing you quality
            guitars, basses, and mandolins, handcrafted by our Master Luthier.
          </p>
          <div>
            <h2>
              <em>GRAND OPENING SALE</em>
            </h2>
            <p>
              In honor of our recent opening, look for special items on sale for
              a limited time.
            </p>
          </div>

          <button onClick={goToProducts} type='button'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
