import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayOut from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        // {
        //   index: true,
        //   element: <ProductsPage products={products}></ProductsPage>,
        // },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          //  prop drilling
          element: <ProductsPage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      {" "}
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
