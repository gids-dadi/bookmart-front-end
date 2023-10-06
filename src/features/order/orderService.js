import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk(
  "get_order/userId",
  async (userId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:3500/api/order/${userId}`,
        config
      );
      return data;
    } catch (error) {
      console.log("Orders request faild", error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "create_order/userId",
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
