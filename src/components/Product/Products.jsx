import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./products.css";

const Products = (props) => {
  //? destructuring props here
  const {
    category,
    features,
    img,
    key,
    name,
    price,
    priceFraction,
    seller,
    shipping,
    star,
    starCount,
    stock,
    url,
    wholePrice,
  } = props.productObj;

  // console.log(props.productObj);

  return (
    <section className="product-detail">
      {/* img container */}
      <div className="img-container">
        <img src={img} alt={name} />
      </div>

      {/* product detail container */}
      <div className="detail-container">
        <h4>{name}</h4>
        <p>by : {seller}</p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button onClick={() => props.handler(props.productObj)}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ marginRight: "0.5rem" }}
          />
          Add to Cart
        </button>
        {/* <h5>Features</h5>
        <ul>
          {features.map((feature) => (
            <li>
              {feature.description}: {feature.value}
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default Products;
