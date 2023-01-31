import "./AddedProductCard.css";

function AddedProductCard({ title }) {
  return (
    <div className="added-products">
      <h4>{title}</h4>
      {/* <p className="added-products-number">1</p> */}
    </div>
  );
}

export default AddedProductCard;
