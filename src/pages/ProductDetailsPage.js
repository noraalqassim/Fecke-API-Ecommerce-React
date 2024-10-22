import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetailsPage() {
  const params = useParams();
  let prouductId = params.productId;

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://fakestoreapi.com/products/" + prouductId;
  //   let url2 = "https://fakestoreapi.com/products/" + prouductId;

  let url2 = `https://fakestoreapi.com/products/${prouductId}`; // this is a above

  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }
    fetchData();
  }, [url]);

  console.log(product);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // if the fetching is successful (not error) but the value of proudcut is still null
  if (!product) {
    return <p>404 product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
