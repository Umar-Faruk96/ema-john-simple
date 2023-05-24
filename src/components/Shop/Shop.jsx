import React, { useEffect, useState } from "react";
import fakeProducts from "../../fakeData/products.json";
import Products from "../Product/Products";
import "./shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  //? useState to hold the product data loaded from products.json
  const [products, setProducts] = useState([]);

  //? useEffect to load the product data from products.json
  useEffect(() => {
    setProducts(fakeProducts);
  }, []);

  //? show 10 products only
  const showProducts = products.slice(0, 10);

  //? declare cart state here
  const [cart, setCart] = useState([]);

  //? load stored products on database if available
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
    setCart(orderProducts);
  }, []);

  //? handle click on add to cart button
  const handleAddToCart = (product) => {
    const cartState = [...cart, product];
    setCart(cartState);
    addToDb(product.key);
  };

  return (
    <main className="shop-container">
      <section className="product-container">
        <h5>{showProducts.length} Products Found</h5>

        {showProducts.map((product) => (
          <Products
            key={product.key}
            singleProduct={product}
            handler={handleAddToCart}
            showAddToCart={true}
          />
        ))}
      </section>

      <aside className="cart-container">
        <Cart cartItem={cart} quantity={cart.length} shopPage={true} />
      </aside>
    </main>
  );
};

export default Shop;
