import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/Book/Book.css";

const Book = ({ book }) => {
  // const books = useSelector((state) => state.books);

  // const renderList = books.map((book) => {
    const { _id, title, author, image, price } = book;

  return (
    <div className="book" key={book._id}>
      <Link to={`/book/${_id}`}>
        <div className="book-link">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="title">{title}</div>by <span>{author}</span>
              <div className="price">#{price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
