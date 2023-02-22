import "./Product.scss";
import { Link } from "react-router-dom";

function Product({ title, author, text, handleClick }) {
  return (
    <div className="product">
      <Link to="/product" style={{ textDecoration: "none" }}>
        <h1>{title}</h1>
      </Link>
      <h2>{author}</h2>
      <p>{text}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}

export default Product;
