import { createSlice } from "@reduxjs/toolkit";
import Notify from "../../assets/Notification.json";

const initialState = {
  notifications: JSON.parse(localStorage.getItem("Notifications")) || Notify,
};

const notifySlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
      localStorage.setItem(
        "Notifications",
        JSON.stringify(state.notifications)
      );
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (item) => item.notificationId !== action.payload
      );
      localStorage.setItem(
        "Notifications",
        JSON.stringify(state.notifications)
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
      localStorage.removeItem("Notifications");
    },
    markNotificationAsRead: (state, action) => {
      state.notifications = state.notifications.map((item) => {
        if (item.notificationId === action.payload.id) {
          return { ...item, isMarkAsRead: action.payload.markAsRead };
        }
        return item;
      });
      localStorage.setItem(
        "Notifications",
        JSON.stringify(state.notifications)
      );
    },
    markAllNotifcationAsRead: (state) => {
      state.notifications = state.notifications.map((item) => {
        return { ...item, isMarkAsRead: true };
      });
      localStorage.setItem(
        "Notifications",
        JSON.stringify(state.notifications)
      );
    },
  },
});

export const {
  addNotification,
  removeNotification,
  clearAllNotifications,
  markNotificationAsRead,
  markAllNotifcationAsRead,
} = notifySlice.actions;

export default notifySlice.reducer;
