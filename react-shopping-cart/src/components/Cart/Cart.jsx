import "./Cart.scss";

function Cart({ counter }) {
  return (
    <div className="cart">
      <div className="circle-box">
        <h2 className="cart-text">Cart</h2>
        <article className="circle">{counter}</article>
      </div>
    </div>
  );
}
export default Cart;
