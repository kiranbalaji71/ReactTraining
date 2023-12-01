import { Button } from "antd";
import React, { useState } from "react";
import "./HelpChat.css";
import {
  CalendarOutlined,
  CoffeeOutlined,
  CreditCardOutlined,
  CrownOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import ChatBox from "./ChatBox";
import Draggable from "react-draggable";
import Logo from "../../assets/logo.svg";

const HelpChat = () => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState("chatOption");

  const togglePopup = () => {
    setOpen(!open);
    setShowPopup("chatOption");
  };

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
    <div>
      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        {open ? (
          <Draggable
            handle=".chatHeader"
            bounds={{ top: -200, left: -175, right: 20, bottom: 20 }}
          >
            <div className="chatPopup">
              <ChatBox
                togglePopup={togglePopup}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                routeLinks={routeLinks}
                Logo={Logo}
              />
            </div>
          </Draggable>
        ) : (
          <Button
            className="messageButton"
            type="primary"
            icon={<MessageOutlined />}
            onClick={togglePopup}
            shape="circle"
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default HelpChat;
