import React from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData/products.json";
import Products from "../Product/Products";

const ProductDetail = () => {
  //? react router parameter
  const { productId } = useParams();

  //? find the match of that parameter
  const matchProduct = data.find((product) => product.key === productId);
  console.log(matchProduct);

  return (
    <>
      <h1>{productId} Product Detail</h1>
      <Products singleProduct={matchProduct} showAddToCart={false}></Products>
    </>
  );
};

export default ProductDetail;
