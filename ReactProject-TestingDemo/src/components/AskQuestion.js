import React from "react";
import { Button, Form, Input } from "antd";
import DiscordServer from "./DiscordServer/DiscordServer";

const AskQuestion = () => {
  const Send = DiscordServer();
  const onFinish = (values) => {
    const message = Object.entries(values).map((data) => `${data[1]}`);
    Send(message);
  };
  return (
    <div className="medicalForm">
      <Form onFinish={onFinish}>
        <Form.Item name="question">
          <Input.TextArea placeholder="Ask your question" rows={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AskQuestion;
