import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = (props) => {
  const { name, price, key, quantity, shipping, seller, url } =
    props.singleProduct;
  const reviewStyle = {
    borderBottom: "1px solid var(--textColor)",
    padding: "var(--halfSize)",
  };
  return (
    <>
      <div style={reviewStyle} className="detail-container">
        <h4>
          <Link to={`/product/${key}`}>{name}</Link>
        </h4>
        <section className="extra-detail-container">
          <div>
            <p>${price}</p>
            <p>
              sold by <Link to={url}>{seller}</Link>
            </p>
            <p>Quantity : {quantity}</p>
          </div>
          <div>
            <p>
              <strong>Shipping : </strong>${shipping}
            </p>
          </div>
        </section>

        <button onClick={() => props.removeProduct(props.singleProduct)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ReviewItem;
