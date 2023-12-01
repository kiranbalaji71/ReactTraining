import { configureStore } from "@reduxjs/toolkit";
import notifySlice from "./features/notification/notifySlice";

export const store = configureStore({
  reducer: {
    Notifications: notifySlice,
  },
});
