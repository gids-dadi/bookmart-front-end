import React, { useEffect } from "react";
import {
  CheckoutContainer,
  Payment,
  SubTotal,
  Total,
} from "../../styles/CheckoutStyle";

import { useSelector, useDispatch } from "react-redux";
import PayStackService from "../../components/Payment/PayStackService";
import { getCart } from "../cart/cartService";
import { createOrder } from "../order/orderService";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const { userInfo } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const userId = userInfo?._id;

  useEffect(() => {
    dispatch(getCart(userId));
  }, [userId, dispatch]);

  return (
    <CheckoutContainer>
      <h1>Order Summary</h1>
      <SubTotal>
        <div>
          <h4>books</h4>
          <p>${cart?.bill}</p>
        </div>
      </SubTotal>

      <Total>
        <h2>Order Total</h2>
        <p>${cart?.bill}</p>
      </Total>

      <Payment>
        <p>Choose below payment methods</p>
        <PayStackService createOrder={createOrder(userId)} />
        
      </Payment>
    </CheckoutContainer>
  );
}
