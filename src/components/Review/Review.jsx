import React, { useEffect, useState } from "react";
import {
  clearTheCart,
  deleteFromDb,
  getStoredCart,
} from "../../utilities/fakedb";
import fakeProducts from "../../fakeData/products.json";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import successImg from "../../images/giphy.gif";

const Review = () => {
  const [orderCart, setOrderCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const productKeys = Object.keys(storedCart);
    const orderProducts = productKeys.map((key) => {
      const matchedProducts = fakeProducts.find(
        (product) => product.key === key
      );
      matchedProducts.quantity = storedCart[key];
      return matchedProducts;
    });
    setOrderCart(orderProducts);
  }, []);

  const orderQuantity = orderCart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  //? handle click on remove product button
  const handleRemoveProduct = (removeProduct) => {
    const cartUpdate = orderCart.filter(
      (cartProduct) => cartProduct.key !== removeProduct.key
    );
    setOrderCart(cartUpdate);
    deleteFromDb(removeProduct.key);
  };

  //? handle place order
  const [orderPlaced, placeOrder] = useState(false);

  const handlePlaceOrder = () => {
    setOrderCart([]);
    placeOrder(true);
    clearTheCart();
  };

  const orderLength = orderCart.length;
  const orderSuccessImg = successImg;

  return (
    <>
      {orderPlaced ? (
        <div style={{ textAlign: "center" }}>
          <img
            src={orderSuccessImg}
            alt="Order Completion Celebration by a gif"
          />
        </div>
      ) : (
        <main className="shop-container">
          <section className="product-container">
            <h4>{orderLength} Products</h4>
            {orderCart.map((product) => (
              <ReviewItem
                key={product.key}
                singleProduct={product}
                removeProduct={handleRemoveProduct}
              />
            ))}
          </section>
          <aside className="cart-container">
            <Cart
              cartItem={orderCart}
              quantity={orderQuantity}
              shopPage={false}
              handler={handlePlaceOrder}
            />
          </aside>
        </main>
      )}
    </>
  );
};

export default Review;
