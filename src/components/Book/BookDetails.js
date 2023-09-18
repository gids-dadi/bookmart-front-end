import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/book/bookSlice";
import { getBookDetails } from "../../features/book/bookService";

const BookDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { books, isError, message } = useSelector((state) => state.books);
  const {  title, author, image, price } = books;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getBookDetails());

    return () => {
      dispatch(reset());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="book" key={books._id}>
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
    </div>
  );
};

export default BookDetails;
