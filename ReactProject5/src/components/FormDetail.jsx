import React, { useState } from "react";
import { Button, Form, Input, Statistic } from "antd";

const { TextArea } = Input;

function FormDetail() {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
  });

  const [listValue, setListValue] = useState(
    JSON.parse(localStorage.getItem("listValue")) || []
  );

  const handleSubmit = () => {
    const updatedList = [...listValue, formData];
    localStorage.setItem("listValue", JSON.stringify(updatedList));
    setListValue(updatedList);

    setFormData({
      username: "",
      message: "",
    });

    console.log("success:", updatedList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const messageValue = listValue.length;
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          colon={false}
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            name="username"
            allowClear
            value={FormData.username}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Message" colon={false}>
          <TextArea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Statistic title="Total Message" value={messageValue} />
    </div>
  );
}

export default FormDetail;
