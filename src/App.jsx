import "./App.css";
import NotFound from "./components/Error/NotFound";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    errorElement: <NotFound />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <section>
      <Header />
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
