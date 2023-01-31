import "./Header.css";
import Cart from "../Cart/Cart";
import AddedProductCard from "../AddedProductCard/AddedProductCard";

function Header({ counter, selectedProducts }) {
  console.log("vilken product", selectedProducts);
  return (
    <div className="header">
      <img
        src="/src/assets/2_Key-words-you-need-to-know-to-understand-Sherlock-Holmes_.jpg"
        width={"120px"}
      />
      <div className="added-products-wrapper">
        {selectedProducts.map((book, key) => (
          <AddedProductCard title={book.title} key={key} />
        ))}
        {/* <AddedProductCard /> */}
      </div>
      <Cart counter={counter} />
    </div>
  );
}

export default Header;
