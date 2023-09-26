import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/post/postSlice";
import fetchSlice from "./features/fetch/fetchSlice";

export const store = configureStore({
  reducer: {
    poster: postSlice,
    fetch: fetchSlice,
  },
});
