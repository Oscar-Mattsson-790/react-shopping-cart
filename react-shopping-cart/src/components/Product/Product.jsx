import "./Product.css";

function Product({ title, author, text, handleClick }) {
  return (
    <div className="product">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{text}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}

export default Product;
