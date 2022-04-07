import React, { useEffect, useState } from "react";
import Nav from "./components/Layout/Nav";
import "./styles/main.css";
import { Signup, ChangePassword, Login } from "./components/Auth";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import ProductsListing from "./components/Products/ProductsListing";
import { fetchAllProducts, initUserCart, fetchCategories, initUserAddress, initializeUserWishlist, updateCart } from "./services"
import { useData } from "./context/data-context";
import { useAuthContext } from "./context/auth-context";
import axios from "axios"
import { Toast } from "./components/Toast/Toast";
import { Order } from "./components/Private/Order/Order";

export default function App() {
  const { state: { toastMsg, cartItems }, dispatch, isError } = useData();
  const { login, setShowLoader } = useAuthContext();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      await fetchAllProducts(dispatch, setLoader);
      await fetchCategories(dispatch, setLoader);
      await initUserAddress(dispatch);

    })();
  }, [dispatch]);


  useEffect(() => {
    if (login) {
      axios.defaults.headers.common["Authorization"] = login.token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [login])

  useEffect(() => {
    if (login) {
      if (cartItems) {
        cartItems.forEach((product) => {
          (async () => {
            while (product.quantity-- > 0) {
              await updateCart(product, "ADD", dispatch, setShowLoader);
            }
          })();
        });
      }
      (async () => {
        await initUserCart(dispatch);
        await initializeUserWishlist(dispatch);

      })();
    }
  }, [login, cartItems, setShowLoader, dispatch]);

  return (
    <div  >
      <Nav />
      <div>{toastMsg && <Toast isError={isError} />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsListing loader={loader} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/order" element={< Order />} />
      </Routes>
    </div>
  );
}