import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../features/book/bookService";
import { reset } from "../../features/book/bookSlice";
import Book from "./Book";
import "../../styles/Book/BookList.css";

const BookList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.accessToken);
  const { books, isError, message } = useSelector((state) => state.books);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBooks());

    return () => {
      dispatch(reset());
    };
    // eslint-disable-next-line
  }, [books, isError, navigate, message, dispatch]);

  return (
    <section className="book-list">
      {books? (
        <div className="books">
          {books.map((book) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <h3>No book has been added </h3>
      )}
    </section>
  );
};

export default BookList;
