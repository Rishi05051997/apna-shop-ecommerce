import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchCategories } from "./services/index"
import Home from "./components/Home/Home";
import { useData } from "./context/data-context";
import Nav from "./components/Layout/Nav";
import "./styles/main.css";
export default function App() {
  const { state: { toastMsg }, dispatch, isError } = useData();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      await fetchCategories(dispatch, setLoader);
    })();
  }, [dispatch]);
  return (
    <div  >
      < Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/products" element={<ProductsListing loader={loader} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/order" element={< Order />} /> */}
      </Routes>
    </div>
  );
}
