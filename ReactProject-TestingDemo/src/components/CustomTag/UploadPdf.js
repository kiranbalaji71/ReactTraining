import React, { useState } from "react";
import axios from "axios";
import { Button, message, Typography, notification, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotification,
  markNotificationAsRead,
} from "../../features/notification/notifySlice";
import Path from "../../assets/Path.json";

function UploadPdf() {
  const [pdfValue, setPdfValue] = useState({});
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

  const onFinish = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/webhook",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        if (response.data.message) {
          setPdfValue({
            notificationId: notifications.length + 1,
            status: "success",
            message: "PDF Completed",
            dateTime: dateTime,
            isMarkAsRead: false,
            path: "pdf",
            description: response.data.message,
          });
          showNotification(pdfValue);
        } else {
          setPdfValue({
            notificationId: notifications.length + 1,
            status: "error",
            message: "PDF Failed",
            dateTime: dateTime,
            isMarkAsRead: false,
            path: "pdf",
            description: response.data.error,
          });
          showNotification(pdfValue);
        }
      } else {
        message.error("Error uploading the PDF.");
      }
    } catch (error) {
      message.error("Error: " + error.message);
    }
  };

  const props = {
    name: "file",
    multiple: false,
    accept: ".pdf",
    customRequest: ({ file }) => onFinish(file),
  };

  return (
    <div className="medicalForm">
      <Typography.Title level={3}>Upload PDF</Typography.Title>
      <Upload {...props}>
        <Button className="moreNotificationsButton" icon={<UploadOutlined />}>
          Upload PDF
        </Button>
      </Upload>
    </div>
  );
}

export default UploadPdf;
