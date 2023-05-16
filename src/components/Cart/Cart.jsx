import React from "react";
import "./cart.css";

const Cart = (props) => {
  //? restructure props here
  const cart = props.cartItem;
  const prices = cart.map((product) => product.price);
  const shippings = cart.map((product) => product.shipping);

  console.log(cart);

  //? cost counts
  const productCost = prices.reduce((prev, curr) => prev + curr, 0);
  const shippingCost = shippings.reduce((prev, curr) => prev + curr, 0);
  const totalCost = productCost + shippingCost;
  const tax = totalCost / 10;
  const orderTotal = totalCost + tax;

  //? solve the Number issue
  const formatNumber = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="cart-container">
      <h3>Order Summary</h3>
      <p>Items Ordered : {props.cartItem.length} </p>
      <ul>
        <li>Items Cost: ${productCost}</li>
        <li>Shipping & Handling Cost: ${shippingCost}</li>
        <li>Total Cost before Tax: ${formatNumber(totalCost)}</li>
        <li>Estimated Tax (VAT): ${formatNumber(tax)}</li>
        <li>Order Total: ${formatNumber(orderTotal)}</li>
      </ul>
      <button>Review your order</button>
    </div>
  );
};

export default Cart;
