import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bookReducer from "../features/book/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
  },
});

export default store;
