import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops {error.statusText || error.message}!</h1>
      <p>Sorry, an 404 error has occurred.</p>
    </>
  );
};

export default NotFound;
