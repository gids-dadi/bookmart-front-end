// import React from "react";
// import { PaystackButton } from "react-paystack";

// const PayStackService = ({ amount, email }) => {
//   const publicKey = process.env.REACT_APP_PS_PUBLIC_TEST_KEY;
//   const [reference, setReference] = React.useState("");

//   const handlePaystackSuccessAction = (reference) => {
//     // handle payment success
//     alert("Payment Successful, check ypor email for confirmation.")
//   };

//   const componentProps = {
//     email:
//     amount,
//     publicKey,
//     text: "Pay With Paystack",
//     onSuccess: (reference) => handlePaystackSuccessAction(reference),
//     onClose: () => alert("Payment canceled by user."),
//   };

//   return < PaystackButton {...componentProps} />;
// };

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";

import { createOrder } from "../../features/order/orderService";

const PayStackService = () => {
  const { userInfo } = useSelector((state) => state.auth.user);
  const userId = userInfo?._id;
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bill = cart?.cart?.bill;
  const publicKey = process.env.REACT_APP_PS_PUBLIC_TEST_KEY;

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [amount, setAmount] = useState(bill);

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      amount: bill * 100,
      email,
      firstname,
      lastname,
    });
    dispatch(createOrder(userId));
    navigate("/order");
  };

  // const changeHandler = (e) => {
  //   const { amount } = e.target;
  //   amount =
  //   setAmount(bill);
  // };

  return (
    <>
      <form id="paymentForm">
        <div className="form-group">
          <h2>Make Payment</h2>

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email-address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            readOnly={true}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="form-submit">
          <button type="submit" onClick={payWithPaystack}>
            {" "}
            Pay{" "}
          </button>
        </div>
      </form>

      <script src="https://js.paystack.co/v1/inline.js"></script>
    </>
  );
};

export default PayStackService;
