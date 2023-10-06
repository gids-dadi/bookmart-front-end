import React, { useEffect } from "react";
import {
  Container,
  DeleteBook,
  Book,
  BookDetails,
  QuantityContainer,
  Summary,
} from "../../styles/Cart/cartStyle";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { getCart, deleteBookFromCart, updateCart } from "../cart/cartService";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth.user);
  const userId = userInfo?._id;

  const handleUpdateCart = ({ userId, bookId, quantity }) => {
    dispatch(updateCart({ userId, bookId, quantity }));
  };

  const handleDeleteBook = (data) => {
    dispatch(deleteBookFromCart(data));
  };

  const handleCheckout = () => {
    if (userId) {
      navigate("/checkout");
    } else {
      alert("Please Login first...");
    }
  };

  useEffect(() => {
    dispatch(getCart(userId));
  }, [userId, dispatch]);

  if (cart && cart.books?.length > 0) {
    return (
      <Container>
        <h2>Cart</h2>
        {cart.books.map((book) => (
          <Book key={book._id}>
            <img src={book.image} alt="Book" />
            <BookDetails>
              <h3>{book.name}</h3>
              <p>Price:#{book?.price}</p>
              <QuantityContainer>
                <label>Quantity:</label>
                <button
                  onClick={() =>
                    handleUpdateCart({
                      userId,
                      bookId: book.bookId,
                      quantity: book.quantity - 1,
                    })
                  }
                  disabled={book.quantity <= 1}
                >
                  -
                </button>
                <span>{book?.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateCart({
                      userId,
                      bookId: book.bookId,
                      quantity: book.quantity + 1,
                    })
                  }
                >
                  +
                </button>
              </QuantityContainer>
              <DeleteBook>
                <AiFillDelete
                  size={25}
                  onClick={() =>
                    handleDeleteBook({ bookId: book.bookId, userId })
                  }
                />
              </DeleteBook>
            </BookDetails>
          </Book>
        ))}

        <Summary>
          <div>
            <strong>Total:</strong>
            <strong>{cart?.bill}$</strong>
          </div>
          <button onClick={handleCheckout}>Proceed to checkout</button>
          <br></br>
          <button>Continue to books</button>
        </Summary>
      </Container>
    );
  } else {
    return (
      <Container>
        <h3>Cart is Empty</h3>
      </Container>
    );
  }
};
export default Cart;
