import React, { useEffect } from "react";
import {
  CheckoutContainer,
  Payment,
  SubTotal,
  Total,
  RazorPayButton,
} from "../../styles/CheckoutStyle";

import { useSelector } from "react-redux";
import PayButton from "../../components/PayButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const cartId = cart?.cart?._id;

  const userId = auth?.userInfo?.id;
  const amountValue = cart?.cart?.bill;

  return (
    <CheckoutContainer>
      <h1>Order Summary</h1>
      <SubTotal>
        <div>
          <h4>books</h4>
          <p>${cart?.cart?.bill}</p>
        </div>
      </SubTotal>

      <Total>
        <h2>Order Total</h2>
        <p>${cart?.cart?.bill}</p>
      </Total>

      <Payment>
        <p>Choose below payment methods</p>
        <RazorPayButton>
          <button>Raxorpay</button>
        </RazorPayButton>

        <PayButton />
      </Payment>
    </CheckoutContainer>
  );
}
