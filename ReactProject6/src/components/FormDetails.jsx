import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Checkbox,
  Cascader,
  Switch,
  Typography,
} from "antd";

const options = [
  { label: "C++", value: "C++" },
  { label: "Python", value: "Python" },
  { label: "Javascript", value: "Javascript" },
];

const location = [
  {
    value: "Tamil Nadu",
    label: "Tamil Nadu",
    children: [
      {
        value: "Chennai",
        label: "Chennai",
      },
      {
        value: "Coimbatore",
        label: "Coimbatore",
      },
      {
        value: "Madurai",
        label: "Madurai",
      },
    ],
  },
];

function FormDetails() {
  const { handleSubmit, control } = useForm();
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (data) => {
    console.log("Success: ", data);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        border: "1px solid #dddddd",
        borderRadius: "10px",
      }}
    >
      <Typography.Title style={{ textAlign: "center" }}>
        Sample Form
      </Typography.Title>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item label="Full Name">
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Please enter name" />
            )}
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputNumber
                {...field}
                placeholder="Please enter phone number"
                style={{ width: "100%" }}
              />
            )}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={"Male"}>Male</Radio>
                <Radio value={"Female"}>Female</Radio>
                <Radio value={"Other"}>Other</Radio>
              </Radio.Group>
            )}
          />
        </Form.Item>
        <Form.Item label="Skill">
          <Controller
            name="skill"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Checkbox.Group {...field} options={options} />
            )}
          />
        </Form.Item>

        <Form.Item label="Location">
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Cascader
                {...field}
                options={location}
                placeholder="Please select"
              />
            )}
          />
        </Form.Item>
        <Form.Item label="Additional message">
          <Switch onClick={(e) => setDisabled(!e)} checked={!disabled} />
        </Form.Item>
        <Form.Item label="Message">
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input.TextArea
                {...field}
                rows={3}
                placeholder="Please enter message"
                disabled={disabled}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormDetails;
