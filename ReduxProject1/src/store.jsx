import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./storage/counterSlice";
import passSlice from "./storage/passSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    inputvalue: passSlice,
  },
});
