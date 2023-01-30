import { useState } from "react";

import "./Product.css";

function Product(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="product">
      <h1> {props.title}</h1>
      <h2> {props.author}</h2>
      <p>{props.text}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add to cart {counter}
      </button>
    </div>
  );
}

export default Product;
