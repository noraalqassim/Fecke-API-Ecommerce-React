import "./App.css";

import Navbar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const productList = [
    {
      id: 1,
      title: "Silver Bracelet",
      price: 239.95,
      description:
        "This product is made to complement an evening gown with variety of colors for your choice.",
      category: "bracelet",
      image: "https://www.mohjewelry.com/cdn/shop/files/w_0c2f7e00-6325-47b3-bc62-21e84264da4b_1024x.png?v=1727360201",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Gold Bracelet",
      price: 212.3,
      description:
        "This product is made to complement an evening gown with variety of colors for your choice.",
      category: "bracelet",
      image:
        "https://www.mohjewelry.com/cdn/shop/files/0375Y_1024x.png?v=1718270039",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Gold Ring",
      price: 515.99,
      description:
        "This product is made to complement an evening gown with variety of colors for your choice.",
      category: "ring",
      image: "https://www.mohjewelry.com/cdn/shop/files/2_b05cb9f6-1d5e-4191-9c9c-7d902e6f6fb2_1024x.png?v=1702215302",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Silver Ring",
      price: 467.99,
      description:
        "This piece is an 18k gold plated ring with two sparkling lines and a rose shaped zircon in the middle.",
      category: "ring",
      image: "https://www.mohjewelry.com/cdn/shop/files/ZYC_1521-3_1024x.png?v=1698928549",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "Gold Earring",
      price: 695,
      description:
        "This product is an 18k gold-plated earrings featuring an elegant design to elevate your daily look.",
      category: "earring",
      image: "https://www.mohjewelry.com/cdn/shop/files/3_7c124352-a912-4618-a3e2-285dcba5dfe9_1024x.png?v=1702126764",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Earring",
      price: 268,
      description:
        "his product is an 18k gold-plated earrings featuring an elegant design to elevate your daily look.",
      category: "earring",
      image: "https://www.mohjewelry.com/cdn/shop/files/4_90381e18-8312-46cb-9c81-9c13a2f923c5_1024x.png?v=1702127166",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Products productList={productList} />
      <Footer />
    </div>
  );
}

export default App;
