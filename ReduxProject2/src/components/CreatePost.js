import React, { useState } from "react";
import { Form, Button, Input, Typography, message, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { addPost } from "../features/post/postSlice";
import useDate from "./useDate";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [includeDate, setIncludeDate] = useState(false);
  const dateTime = useDate(includeDate);
  const [form] = Form.useForm();

  const handleFinish = (value) => {
    console.log(value);
    dispatch(addPost([value.title, value.message, dateTime]));
    message.success("The post has been created successfully.");
    form.resetFields();
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <Typography.Title level={2}>Create a post</Typography.Title>
      <Form form={form} autoComplete="off" onFinish={handleFinish}>
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter your title" }]}
        >
          <Input placeholder="Enter your title" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={5} placeholder="please enter message" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={(e) => setIncludeDate(e.target.checked)}>
            The post should include the date and time.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="sumbit" block>
            New post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
