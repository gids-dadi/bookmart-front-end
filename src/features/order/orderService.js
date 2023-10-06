import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk(
  "order/get_order/userId",
  async (userId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:3500/api/orders/${userId}`,
        config
      );
      return data;
    } catch (error) {
      console.log("Orders request faild", error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "order/create_order/userId",
  async (userId) => {

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:3500/api/order/${userId}`,
        config
      );
      const orderID = await data.id;
      return orderID;
    } catch (error) {
      console.log("Orders request failed", error);
    }
  }
);
