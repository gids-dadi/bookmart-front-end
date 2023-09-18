import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCart = createAsyncThunk('cart/getCart', async (id) => { 
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.get(`/api/cart/:${id}`, config);

    return data;
  } catch (error) {
    console.log(error); 
  }
}); 

export const addToCart = createAsyncThunk('cart/addToCart', async data => {
  const { userId, productId, quantity } = data;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.post(
      `/api/cart/:${userId}`,
      { productId, quantity },
      config
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateCart = createAsyncThunk('/cart/update', async data => {
  const { userId, bookId, quantity } = data;
  try {
    const { data } = await axios.put(`/api/cart/:${userId}`, {
      bookId,
      quantity
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteBookFromCart = createAsyncThunk(
  'cart/deleteFromCart',
  async data => {
    const { userId, bookId } = data;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const { data } = await axios.delete(
        `/api/cart/:${userId}/${bookId}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
