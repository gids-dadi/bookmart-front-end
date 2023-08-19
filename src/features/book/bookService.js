import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useParams } from "react-router-dom";

const Base_url = "https://bookmart-api.onrender.com/";

export const createBook = createAsyncThunk(
  "books/create",
  async (bookData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(Base_url + "books", bookData, config);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getBooks = createAsyncThunk("book/getBooks", async (thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get( Base_url + "books", config);

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// export const getBookDetails = createAsyncThunk(
//   "book/getBookDetails",
//   async (thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.accessToken;

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         `http://localhost:3500/api/book${id}`,
//         config
//       );

//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
