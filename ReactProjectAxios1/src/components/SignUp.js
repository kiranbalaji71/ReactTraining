import React from "react";
import axios from "axios";
import { Form, Input, Typography, Button } from "antd";

const SignUp = ({ url }) => {
  const [form] = Form.useForm();
  const register = async (value) => {
    try {
      const response = await axios.post(url + "/user/register", {
        username: value.username,
        email: value.email,
        password: value.password,
      });
      console.log(response.data);
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Typography.Title level={2}>Sign Up</Typography.Title>
      <Form form={form} autoComplete="off" onFinish={register}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Give valid email account" },
          ]}
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="sumbit" block>
            Sign up
          </Button>
        </Form.Item>
        <Typography.Link href="/signin" style={{ textAlign: "center" }}>
          Sign in
        </Typography.Link>
      </Form>
    </div>
  );
};

export default SignUp;
