import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import HelpChatPopup from "./HelpChatPopup";

const HelpChatBot = () => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };
  return (
    <div className="chatPopup">
      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        {open ? (
          <HelpChatPopup togglePopup={togglePopup} open={open} />
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

export default HelpChatBot;
