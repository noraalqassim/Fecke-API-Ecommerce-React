import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LayOut from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "./components/error/Error";

function App() {
  const url = "https://fakestoreapi.com/products";

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState([]);

  console.log(userInput);
  console.log(wishList, "wishList");

  function getData() {
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress color="neutral" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut wishList={wishList} />,
      children: [
        {
          path: "/",
          element: (
            <HomePage
              productList={productList}
            />
          ),
        },
        {
          path: "/products",
          element: (
            <ProductsPage
              productList={productList}
              setUserInput={setUserInput}
              userInput={userInput}
              wishList={wishList}
              setWishList={setWishList}
            />
          ),
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "/wishList",
          element: (
            <WishListPage wishList={wishList} setWishList={setWishList} />
          ),
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

//test
export default App;
