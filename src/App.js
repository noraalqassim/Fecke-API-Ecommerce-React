import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";
import notfound from "./Images/error.png";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const url = "https://fakestoreapi.com/products";

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="App">
      <Navbar />
      <Home />
      <Products productList={productList} />
      <Footer />
    </div>
  );
}

export default App;
