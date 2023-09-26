import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Typography, Button, Switch } from "antd";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [switchInput, setSwitchInput] = useState(true);

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("registerValue")) || [];

    const user = storedData.find(
      (item) =>
        (item.email === data.email && item.password === data.password) ||
        (item.username === data.username && item.password === data.password)
    );
    if (user) {
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      alert("Invalid account");
    }
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
        Login
      </Typography.Title>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item>
          <Switch
            checkedChildren="Email"
            unCheckedChildren="Username"
            style={{ width: "100%", backgroundColor: "#24a0ed" }}
            onClick={(e) => setSwitchInput(e)}
            checked={switchInput}
          />
        </Form.Item>
        {switchInput ? (
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
        ) : (
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
        )}
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
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <Typography.Paragraph style={{ textAlign: "center" }}>
        Don't have an account? Register{" "}
        <Typography.Link href="/register">here</Typography.Link>.
      </Typography.Paragraph>
    </div>
  );
}
export default Login;
