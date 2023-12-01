import {
  CalendarOutlined,
  CloseCircleFilled,
  CoffeeOutlined,
  CreditCardOutlined,
  CrownOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, List, Space, Typography } from "antd";
import React from "react";
import Logo from "../../assets/logo.svg";
import Draggable from "react-draggable";

const HelpChatPopup = ({ togglePopup }) => {
  const routeLinks = [
    {
      icon: <UserOutlined style={{ color: "#118e44" }} />,
      label: "Account",
      key: "innerChat",
    },
    {
      icon: <FileTextOutlined style={{ color: "#118e44" }} />,
      label: "Assessment",
      key: "innerChat",
    },
    {
      icon: <CalendarOutlined style={{ color: "#118e44" }} />,
      label: "Consultation",
      key: "innerChat",
    },
    {
      icon: <FileDoneOutlined style={{ color: "#118e44" }} />,
      label: "Health Records",
      key: "innerChat",
    },
    {
      icon: <CrownOutlined style={{ color: "#118e44" }} />,
      label: "Membership Plans",
      key: "innerChat",
    },
    {
      icon: <CoffeeOutlined style={{ color: "#118e44" }} />,
      label: "Prescriptions",
      key: "innerChat",
    },
    {
      icon: <CreditCardOutlined style={{ color: "#118e44" }} />,
      label: "Order",
      key: "innerChat",
    },
  ];

  return (
    <Draggable>
      <div className="chatBotPopup">
        <div className="chatAvatar" style={{ backgroundColor: "#325574" }}>
          <Space>
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
            <CloseCircleFilled
              style={{ color: "#ffffff" }}
              onClick={togglePopup}
              sizes="large"
            />
          </div>
        </div>
        <div className="chatOptionArea" style={{ backgroundColor: "#ffffff" }}>
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
            <Button className="askButton" type="primary" block>
              Ask Question
            </Button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default HelpChatPopup;
