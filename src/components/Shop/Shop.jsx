import React, { useEffect, useState } from "react";
import data from "../../fakeData/products.json";
import Products from "../Product/Products";
import "./shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  //? useState to hold the product data loaded from products.json
  const [products, setProducts] = useState([]);

  //? useEffect to load the product data from products.json
  useEffect(() => {
    setProducts(data);
  }, []);

  //? show 10 products only
  const showProducts = products.slice(0, 10);

  //? declare cart state here
  const [cart, setCart] = useState([]);

  //? handle click on add to cart button
  const handleAddToCart = (product) => {
    const cartState = [...cart, product];
    setCart(cartState);
  };

  return (
    <main className="shop-container">
      <section className="product-container">
        <h1>Shop: {showProducts.length} Products</h1>

        {showProducts.map((product) => (
          <Products
            key={product.key}
            productObj={product}
            handler={handleAddToCart}
          />
        ))}
      </section>

      <aside className="cart-container">
        <Cart cartItem={cart} />
      </aside>
    </main>
  );
};

export default Shop;
