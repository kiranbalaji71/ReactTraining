import React from "react";
import { Avatar, Button, List, Space, Typography } from "antd";
import { CloseCircleFilled, RightOutlined } from "@ant-design/icons";

const ChatOption = ({ routeLinks, setShowPopup, togglePopup, Logo }) => {
  return (
    <div className="chatBox">
      <div className="chatAvatar" style={{ backgroundColor: "#325574" }}>
        <Space className="chatHeader">
          <Avatar
            src={<img src={Logo} alt="avatar" />}
            style={{
              width: "64px",
              height: "64px",
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
              onClick={togglePopup}
              sizes="large"
            />
          </Space>
        </div>
      </div>
      <div className="chatOptionArea">
        <div className="chatTypography">
          <Typography.Paragraph type="secondary">
            Hello, ask me a question or select one below.
          </Typography.Paragraph>
          <Typography.Title level={5} style={{ marginTop: "0.5em" }}>
            How can we help you?
          </Typography.Title>
        </div>
        <div className="chatObject">
          <List
            className="chatList"
            dataSource={routeLinks}
            bordered
            style={{ borderRadius: "5px", color: "#8c8c8c" }}
            renderItem={(item) => (
              <List.Item
                className="chatListItem"
                onClick={() => setShowPopup(item.key)}
                actions={[<RightOutlined style={{ color: "#cccccc" }} />]}
              >
                <div style={{ margin: "2% 3%", width: "100%" }}>
                  <Space>
                    <Typography.Text style={{ color: "#118e44" }}>
                      {item.icon}
                    </Typography.Text>
                    <Typography.Paragraph>{item.label}</Typography.Paragraph>
                  </Space>
                </div>
              </List.Item>
            )}
          />
        </div>
        <div className="chatTypography">
          <Button
            className="askButton"
            onClick={() => setShowPopup("chatQuestion")}
            type="primary"
            block
          >
            Ask Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
