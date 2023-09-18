import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./features/pages/Layout";
import BookList from "./components/Book/BookList";
import BookDetails from "./components/Book/BookDetails";
import AddBook from "./components/Book/AddBook";
import Register from "./features/pages/Register";
import Home from "./features/pages/Home";
import Login from "./features/pages/Login";
import Cart from "./features/pages/Cart";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/cart" element={<Cart />} />
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
