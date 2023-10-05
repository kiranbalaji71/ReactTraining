import React from "react";
import axios from "axios";
import { Form, Input, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SignIn = ({ url }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const login = async (value) => {
    try {
      const response = await axios.post(url + "/user/login", {
        email: value.email,
        password: value.password,
      });
      console.log(response.data);

      localStorage.setItem(
        "refreshToken",
        JSON.stringify(response.data.user["refresh"])
      );
      form.resetFields();
      localStorage.setItem("login", "true");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Typography.Title level={2}>Sign In</Typography.Title>
      <Form form={form} autoComplete="off" onFinish={login}>
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
            Sign In
          </Button>
        </Form.Item>
        <Typography.Link href="/signup" style={{ textAlign: "center" }}>
          Sign up
        </Typography.Link>
      </Form>
    </div>
  );
};

export default SignIn;
