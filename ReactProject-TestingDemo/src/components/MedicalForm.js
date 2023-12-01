import React from "react";
import { Form, Input, Button, Select, InputNumber, Typography } from "antd";
import DiscordServer from "./DiscordServer/DiscordServer";

const { Option } = Select;

const MedicalForm = () => {
  const Send = DiscordServer();
  const onFinish = (values) => {
    console.log(values);
    const message = Object.entries(values)
      .map((data) => `**${data[0]}** : ${data[1]}`)
      .join("\n");
    Send(message);
  };

  return (
    <div className="medicalForm">
      <Typography.Title level={3}>Form</Typography.Title>
      <Form
        wrapperCol={{ span: 14 }}
        labelCol={{ span: 6 }}
        style={{ width: "100%" }}
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="medicine" label="Medicine">
          <Input />
        </Form.Item>
        <Form.Item name="allergies" label="Allergies">
          <Input />
        </Form.Item>
        <Form.Item name="message" label="Message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ md: { offset: 6, span: 10 } }}>
          <Button
            className="submitButton"
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MedicalForm;
