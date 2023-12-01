import React, { useState } from "react";
import { Avatar, Button, Input, Space, Typography } from "antd";
import {
  CloseCircleFilled,
  LeftOutlined,
  MessageOutlined,
  SendOutlined,
} from "@ant-design/icons";

const InnerChat = ({ setShowPopup, Logo }) => {
  const [liveChat, setLiveChat] = useState(false);
  return (
    <div className="chatBox">
      <div className="chatAvatar" style={{ backgroundColor: "#325574" }}>
        <Space className="chatHeader">
          <Avatar
            src={<img src={Logo} alt="avatar" />}
            style={{
              width: "48px",
              height: "48px",
              border: "3px solid #ffffff",
            }}
          />
          <div>
            <Typography.Title
              level={5}
              style={{ margin: "0.2rem auto", color: "#ffffff" }}
            >
              I'm Clara
            </Typography.Title>
            <Typography.Paragraph style={{ color: "#ffffff" }}>
              Care Navigater
            </Typography.Paragraph>
          </div>
        </Space>
        <div style={{ marginBottom: "auto" }}>
          <Space>
            <CloseCircleFilled
              className="closeIcon"
              onClick={() => setShowPopup("chatFeedback")}
              sizes="large"
            />
          </Space>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#dedede",
        }}
      >
        {liveChat ? (
          <Button type="text" onClick={() => setLiveChat(false)}>
            <LeftOutlined />
            Main menu
          </Button>
        ) : (
          <div
            className="mainButtons"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button type="text" onClick={() => setShowPopup("chatOption")}>
              <LeftOutlined />
              Main menu
            </Button>
            <Button
              type="text"
              style={{ color: "#118e44" }}
              onClick={() => setLiveChat(true)}
            >
              Live chat
              <MessageOutlined />
            </Button>
          </div>
        )}
      </div>
      <div className="chatArea">
        {liveChat ? (
          <Space>
            <div className="chatTextBoxLive">
              <span>Please wait for the care admin to join</span>
            </div>
          </Space>
        ) : (
          <div>
            <Space>
              <Avatar size={20} src={<img src={Logo} alt="avatar" />} />
              <div className="chatTextBox">
                <span>How</span>
              </div>
            </Space>
            <div style={{ textAlign: "right" }}>
              <Space>
                <div className="chatTextBoxSender">
                  <span>Why</span>
                </div>
              </Space>
            </div>
          </div>
        )}
      </div>

      <div className="chatInput">
        <Input placeholder="Type a new message" />
        <Button className="submitButton" type="primary">
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

export default InnerChat;
