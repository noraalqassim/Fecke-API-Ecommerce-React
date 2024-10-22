import React from "react";

import Products from "../../components/Products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import notfound from "../../Images/error.png";

function ProductsPage() {
  const url = "https://fakestoreapi.com/products";

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [searchValue, setSearchValue] = useState("");

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
      <div className="error">
        <h2>404 Not Found</h2>
        <img src={notfound} alt="404" />
      </div>
    );
  }

  return (
    <div>
      <Products productList={productList} loading={loading} error={error} />
    </div>
  );
}

export default ProductsPage;
