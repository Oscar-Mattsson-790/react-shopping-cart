import "./Product.css";

function Product(props) {
  console.log(props);

  return (
    <div className="product">
      <h1> {props.title}</h1>
      <h2> {props.author}</h2>
      <p>{props.text}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
