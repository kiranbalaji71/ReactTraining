import {
  CloseCircleFilled,
  LeftOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import React, { useState } from "react";

const ChatQuestion = ({ setShowPopup }) => {
  const [faq, setFaq] = useState("");
  return (
    <div className="chatBox">
      <div className="chatAvatar" style={{ backgroundColor: "#325574" }}>
        <Space className="chatHeader">
          <div>
            <Typography.Title
              level={5}
              style={{ margin: "0.2rem auto", color: "#ffffff" }}
            >
              FAQ
            </Typography.Title>
            <Typography.Paragraph style={{ color: "#ffffff" }}>
              Ask your question to us.
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
          <Button type="text" style={{ color: "#118e44" }}>
            Question
            <QuestionCircleOutlined />
          </Button>
        </div>
      </div>
      <div className="chatArea">
        <div className="chatInputTextarea">
          <Input.TextArea
            value={faq}
            onChange={() => setFaq("")}
            placeholder="Write your question.."
            style={{ width: "100%" }}
            rows={3}
          />
        </div>

        <Typography.Paragraph type="secondary">
          Frequently Asked Question
        </Typography.Paragraph>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="chatQuestionBox"
            onClick={() => setFaq("What is Niyami.ai?")}
          >
            What is Niyami.ai?
          </span>
          <span
            className="chatQuestionBox"
            onClick={() => setFaq("How does Niyami.ai works?")}
          >
            How does Niyami.ai works?
          </span>
          <span
            className="chatQuestionBox"
            onClick={() => setFaq("Does Niyami.ai is health care site?")}
          >
            Does Niyami.ai is health care site?
          </span>
        </div>
      </div>
      <div className="chatBottomButtons">
        <Button
          className="submitButton"
          type="primary"
          style={{ width: "90%" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ChatQuestion;
