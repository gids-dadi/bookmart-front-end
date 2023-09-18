import { createSlice } from "@reduxjs/toolkit";
import { getCart, addToCart, updateCart, deleteBookFromCart } from "./cartService";


const initialState = {
  cart: null,
  loading: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
    extraReducers: builder => {
    builder.addCase(getCart.pending, state => {
      state.loading = true;
      state.cart = null;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(getCart.rejected, state => {
      state.loading = false;
      state.cart = null;
    });
    builder.addCase(addToCart.pending, state => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = action.payload;

      state.loading = false;
    });
    builder.addCase(addToCart.rejected, state => {
      state.loading = false;
    });
    builder.addCase(deleteBookFromCart.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteBookFromCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteBookFromCart.rejected, (state, action) => {
      state.loading = false;
    })
    builder.addCase(updateCart.pending, state => {});
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(updateCart.rejected, state => {});
  }
})

export default cartSlice.reducer;