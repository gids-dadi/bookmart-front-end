import React from "react";
import { Card, CardHeader, CardMain } from "../../styles/OrderStyle";

const Book = ({ imgUrl, title, price }) => {
  return (
    <CardMain>
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
      <h5>Price: {price}</h5>
    </CardMain>
  );
};

function OrderCard({ dateAdded, totalAmount, status, books }) {
  console.log(books);
  return (
    <Card>
      <CardHeader>
        <p>Order Placed: {dateAdded}</p>
        <p>Total: {totalAmount}</p>
        {/* <p>Order Status: {status}</p> */}
      </CardHeader>

      {books?.map((book, index) => (
        <Book
          key={index}
          imgUrl={book.image}
          title={book.name}
          price={book.price}
        />
      ))}
    </Card>
  );
}

export default OrderCard;
