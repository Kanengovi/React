import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";
import Detail from "./components/ProductDetail";
import Cart from "./components/card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (p) => {
    if(cart.some(product => product.id === p.id)){
      alert("This product already in cart!");
      return;
    }
    setCart((pro) => [...pro, p]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home products={products} cart={cart}/>} />
        <Route path="/:id" element={<Detail products={products} cart={cart} add={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;