import "./Header.scss";
import Cart from "../Cart/Cart";
import AddedProductCard from "../AddedProductCard/AddedProductCard";
import { Link } from "react-router-dom";

function Header({ counter, selectedProducts }) {
  return (
    <div className="header">
      <img
        src="/src/assets/2_Key-words-you-need-to-know-to-understand-Sherlock-Holmes_.jpg"
        width={"240px"}
      />
      <div className="added-products-wrapper">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h1 className="about">About</h1>
        </Link>
        <Cart counter={counter} />
        {selectedProducts.map((book, key) => (
          <AddedProductCard title={book.title} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Header;
