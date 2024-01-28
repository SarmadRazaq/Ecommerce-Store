import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asdasd"
          name="Macbook"
          price={4545}
          stock={435}
          photo="https://m.media-amazon.com/images/I/71TPda7cwUL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
