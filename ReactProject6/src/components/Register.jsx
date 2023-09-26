import React from "react";
import { Form, Input, Typography, Button } from "antd";
import { useForm, Controller } from "react-hook-form";

function Register() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("registerValue")) || [];
    if (storedData.some((item) => item.email === data.email)) {
      alert("Email is not valid");
      return;
    } else if (storedData.some((item) => item.username === data.username)) {
      alert("Username is not valid");
      return;
    }

    storedData.push(data);
    localStorage.setItem("registerValue", JSON.stringify(storedData));
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
        marginTop: 100,
        padding: "10px 20px 20px",
        border: "1px solid",
        boxShadow: "10px 10px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Register
      </Typography.Title>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Controller
            control={control}
            name="username"
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Please enter username"
                allowClear
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "given a valid email ID!",
            },
          ]}
        >
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Please enter email" allowClear />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Please enter password"
                allowClear
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Sign Up
          </Button>
        </Form.Item>
        <Typography.Paragraph style={{ textAlign: "center" }}>
          Already have an account? Login{" "}
          <Typography.Link href="/login">here</Typography.Link>.
        </Typography.Paragraph>
      </Form>
    </div>
  );
}
export default Register;
