import "./Header.css";

import Cart from "../Cart/Cart";

function Header() {
  return (
    <div className="header">
      <img
        src="/src/assets/2_Key-words-you-need-to-know-to-understand-Sherlock-Holmes_.jpg"
        width={"120px"}
      />
      <Cart />
    </div>
  );
}

export default Header;
