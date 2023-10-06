import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getOrders } from "./features/order/orderService";

import Layout from "./features/pages/Layout";
import BookList from "./components/Book/BookList";
import BookDetails from "./components/Book/BookDetails";
import AddBook from "./components/Book/AddBook";
import Register from "./features/pages/Register";
import Home from "./features/pages/Home";
import Login from "./features/pages/Login";
import Profile from "./components/Profile";
import Cart from "./features/pages/Cart";
import Order from "./features/pages/Order";
import Checkout from "./features/pages/Checkout";

const App = () => {

    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    let { userToken } = user;
    const userId = user?.userInfo?.id;

    // useEffect(() => {
    //   if (userId) {
    //     dispatch(getOrders(userId));
    //   }
    // }, [userToken, userId, dispatch]);

    // useEffect(() => {
    //   dispatch(fetchProducts());
    // }, [dispatch]);


  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
