import "./ProductItem.scss";
import { Link } from "react-router-dom";

export default function ProductItem() {
  return (
    <div className="wrapper-product">
      <h1 className="product-item-header">Selected Item</h1>
      <div className="product-item-container">
        <div className="product">
          <h1>A Sign of Four</h1>
          <h2>Av Sir Arthur Conan Doyle</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            explicabo dolore porro nisi quae, facilis enim quia accusamus
            expedita eos voluptates quod tenetur qui velit id unde fugiat rem
            aspernatur?
          </p>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
