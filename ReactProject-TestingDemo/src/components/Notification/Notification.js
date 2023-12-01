import React from "react";
import { Typography, Button, Space, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Path from "../../assets/Path.json";
import {
  addNotification,
  markNotificationAsRead,
} from "../../features/notification/notifySlice";

const Notification = () => {
  const notifications = useSelector(
    (state) => state.Notifications.notifications
  );
  const dispatch = useDispatch();

  const showNotification = (newNotification) => {
    dispatch(addNotification(newNotification));
    notification[newNotification.status]({
      message: newNotification.message,
      description: newNotification.description,
      onClick: () =>
        handleClickNotification(
          newNotification.notificationId,
          newNotification.path
        ),
    });
    sendMessage(newNotification.notificationId, newNotification.isMarkAsRead);
  };

  const sendMessage = async (id, markAsRead) => {
    const config = {
      notificationId: id,
      isMarkAsRead: markAsRead,
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/api", config);
      if (response.status === 200) {
        console.log(response.data.message);
        console.log(
          response.data.mark_as_read ? "mark as read" : "mark as unread"
        );
      } else {
        console.log("Reponse is not received properly");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickNotification = (id, path) => {
    let link;
    Path.forEach((item) => {
      if (path === item.msgPath) {
        link = item.redirectPath;
      }
    });

    window.location.href = link;
    dispatch(markNotificationAsRead({ id, markAsRead: true }));
    sendMessage(id, true);
  };

  const today = new Date();
  const dateTime =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  const newValueNotification = {
    notificationId: notifications.length + 1,
    status: "open",
    message: "New Notification",
    dateTime: dateTime,
    isMarkAsRead: false,
    path: "pdf",
    description: "This is a new notification",
  };

  return (
    <div>
      <div className="medicalForm">
        <Typography.Title level={3}>Notification</Typography.Title>
        <Space>
          <Button
            className="moreNotificationsButton"
            onClick={() => showNotification(newValueNotification)}
          >
            Add Notification
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Notification;
