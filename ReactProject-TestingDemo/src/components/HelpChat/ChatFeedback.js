import React, { useState } from "react";
import { Button, Input, Space, Typography } from "antd";
import {
  CloseCircleFilled,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const ChatFeedback = ({ setShowPopup, togglePopup }) => {
  const [thumbButton, setThumbButton] = useState(null);

  return (
    <div className="chatBox">
      <div className="chatAvatar" style={{ backgroundColor: "#325574" }}>
        <Space className="chatHeader">
          <div>
            <Typography.Title
              level={5}
              style={{ margin: "0.2rem auto", color: "#ffffff" }}
            >
              Leave your feedback
            </Typography.Title>
            <Typography.Paragraph style={{ color: "#ffffff" }}>
              Your valuable rating is important to us.
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
      <div className="chatFeedbackArea">
        <Typography.Paragraph style={{ textAlign: "center" }} type="secondary">
          Tell us how you rate cur service
        </Typography.Paragraph>
        <div className="reactionButtons">
          <Button
            shape="circle"
            size="large"
            type="primary"
            className={
              thumbButton === "up" ? "thumbUpButtonActive" : "thumbUpButton"
            }
            onClick={() => setThumbButton("up")}
          >
            <LikeFilled />
          </Button>
          <Button
            shape="circle"
            type="primary"
            size="large"
            className={
              thumbButton === "down"
                ? "thumbDownButtonActive"
                : "thumbDownButton"
            }
            onClick={() => setThumbButton("down")}
          >
            <DislikeFilled />
          </Button>
        </div>
        <div className="chatInputTextarea">
          <Input.TextArea
            placeholder="Add your comments"
            disabled={thumbButton === null}
            style={{ width: "100%" }}
            rows={3}
          />
        </div>
      </div>
      <div className="chatBottomButtons">
        <Button
          className="cancelButton"
          onClick={() => setShowPopup("chatOption")}
          style={{ width: "40%" }}
        >
          Cancel
        </Button>
        <Button
          className="submitButton"
          type="primary"
          style={{ width: "40%" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ChatFeedback;
