import React from "react";
import { Container, Header } from "../../styles/OrderStyle";
import OrderCard from "../../components/Order/OrderCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../order/orderService";
export default function Orders() {
  const orders = useSelector((state) => state.order.orders);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // let { userToken } = user;
  const userId = user?.userInfo?._id;
  useEffect(() => {
    if (userId) {
      dispatch(getOrders(userId));
    }
  }, [userId, dispatch]);

  return (
    <Container>
      <Header>
        <h1>Your Orders</h1>
      </Header>
      {orders.map((order) => {
        return (
          <OrderCard
            key={order._id}
            dateAdded={order.date_ordered}
            totalAmount={order.bill}
            // status={order.status}
            books={order.books}
          />
        );
      })}
    </Container>
  );
}
