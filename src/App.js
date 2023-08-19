import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import BookList from "./components/Book/BookList";
import BookDetails from "./components/Book/BookDetails";
import AddBook from "./components/Book/AddBook";
import Register from "./features/pages/Register";
import Login from "./features/pages/Login";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/books" element={<BookList />} />
          {/* <Route path="/book/:id" element={<BookDetails />} /> */}
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/orders" element={<Orders />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
