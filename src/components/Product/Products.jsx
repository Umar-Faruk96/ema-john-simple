import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  //? destructuring props here
  const {
    category,
    features,
    img,
    key,
    name,
    price,
    seller,
    shipping,
    star,
    starCount,
    stock,
    url,
  } = props.singleProduct;

  return (
    <section className="product-detail">
      {/* img container */}
      <div className="img-container">
        <img src={img} alt={name} />
      </div>

      {/* product detail container */}
      <div className="detail-container">
        <h4>
          <Link to={`/product/${key}`}>{name}</Link>
        </h4>
        <section className="extra-detail-container">
          <div>
            <p>sold by : {seller}</p>
            <p>
              category : <Link to={url}>{category}</Link>
            </p>
            <p>${price}</p>
            <p className="rating">
              <b>
                Rating : <i>{star}</i>
              </b>
              <b>
                Total Rating: <i>{starCount}</i>
              </b>
            </p>
            <p>only {stock} left in stock - order soon</p>
          </div>
          <div>
            <h5>Features</h5>
            <ul>
              {features.map((feature) => (
                <li key={feature.value}>
                  {feature.description}: {feature.value}
                </li>
              ))}
            </ul>
            <p>
              <strong>Shipping :</strong> ${shipping}
            </p>
          </div>
        </section>
        {props.showAddToCart && (
          <button onClick={() => props.handler(props.singleProduct)}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginRight: "0.5rem" }}
            />
            Add to Cart
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
