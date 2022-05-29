import React, { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"
import "./styles/main.css";
import { useData } from "./context/data-context";
import { useAuthContext } from "./context/auth-context";

import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import { ProductsListing, ProductDetails } from "./components/Products";
import { Nav } from "./components/Layout";
import { Signup, ChangePassword, Login } from "./components/Auth/index";
import { Wishlist, Profile, Order, PrivateRouter } from "./components/Private";
import { fetchAllProducts, initUserCart, fetchCategories, initUserAddress, initializeUserWishlist, updateCart } from "./services/index"
import { Toast } from "./components/Toast/Toast";


export default function App() {
  const encodedToken = localStorage.getItem("token");
  const { state: { toastMsg, itemsInCart }, dispatch, isError } = useData()
  const { login, setShowLoader } = useAuthContext();
  const [loader, setLoader] = useState(false);
  const cartItems = useMemo(() => {
    if (!login && itemsInCart.length > 0) {
      return itemsInCart.map((item) => item);
    }
  }, [itemsInCart, login]);
  useEffect(() => {
    if (login) {
      if (cartItems) {
        cartItems.forEach((product) => {
          (async () => {
            while (product.quantity-- > 0) {
              await updateCart(product, "ADD", dispatch, setShowLoader, encodedToken);
            }
          })();
        });
      }
    }
    (async () => {
      await fetchAllProducts(dispatch, setLoader);
      await fetchCategories(dispatch, setLoader);
      await initUserAddress(dispatch);

    })();
  }, [dispatch, cartItems, login, encodedToken, setShowLoader]);


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
              await updateCart(product, "ADD", dispatch, setShowLoader, encodedToken);
            }
          })();
        });
      }
      (async () => {
        await initUserCart(dispatch);
        await initializeUserWishlist(dispatch, encodedToken);

      })();
    }
  }, [login, dispatch, cartItems, setShowLoader, encodedToken]);

  return (
    <div  >
      <Nav />
      <div>{toastMsg && <Toast isError={isError} />}</div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/products" element={<ProductsListing loader={loader} />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={
          <PrivateRouter>
            <Cart />
          </PrivateRouter>} />
        {/* Private Pages */}
        <Route path="/wishlist" element={
          < PrivateRouter>
            <Wishlist />
          </PrivateRouter>
        } />
        <Route path="/profile" element={
          < PrivateRouter>
            < Profile />
          </PrivateRouter>} />
        <Route path="/order" element={
          < PrivateRouter>
            < Order />
          </PrivateRouter>} />
      </Routes>
    </div>
  );
}
