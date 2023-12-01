import React from "react";
import { Typography, Space } from "antd";
import NotifyButton from "./NotifyButton";

const NotificationButton = () => {
  return (
    <div
      style={{
        margin: "0 10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Space>
        <NotifyButton />
      </Space>
    </div>
  );
};

export default NotificationButton;
