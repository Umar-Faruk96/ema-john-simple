import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  //? restructure props here
  const cart = props.cartItem;
  const orderQuantity = props.quantity;
  const prices = cart.map((product) => product.price);
  const shippings = cart.map((product) => product.shipping);

  // console.log(cart);

  //? cost counts
  const productCost = prices.reduce((prev, curr) => prev + curr, 0);
  const shippingCost = shippings.reduce((prev, curr) => prev + curr, 0);
  const allCosts = productCost + shippingCost;
  const tax = allCosts / 10;
  const orderTotal = allCosts + tax;

  //? solve the Number issue
  const formatNumber = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="cart-container">
      <h3 className="text-success">Order Summary</h3>
      <p>
        {props.shopPage ? `Items Ordered` : `Items Quantity`} : {orderQuantity}
      </p>
      <ul>
        <li>Items Cost: ${formatNumber(productCost)}</li>
        <li>Shipping & Handling Cost: ${formatNumber(shippingCost)}</li>
        <li>Total Cost before Tax: ${formatNumber(allCosts)}</li>
        <li>Estimated Tax (VAT): ${formatNumber(tax)}</li>
        <li>Order Total: ${formatNumber(orderTotal)}</li>
      </ul>
      {props.shopPage ? (
        <Link to="/review">
          <button>Review your order</button>
        </Link>
      ) : (
        <button onClick={props.handler}>Place Your Order</button>
      )}
    </div>
  );
};

export default Cart;
