import { Button, Form, Input, InputNumber, Grid } from "antd";
import React from "react";

const { useBreakpoint } = Grid;

const JsonForm = () => {
  const screens = useBreakpoint();
  return (
    <div className="jsonForm">
      <Form layout="vertical" style={{ width: "100%" }}>
        <Form.Item
          name="BuildNumber"
          label="Bulid Number"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="baseUrl" label="Base Url" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="currentVerison"
          label="Current Verions"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          name="deprecatedVersion"
          label="Deprecated Versions"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          name="outdatedVersion"
          label="Outdated Versions"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item wrapperCol={screens.md ? { span: 12 } : {}}>
          <Button
            className="submitButton"
            shape="square"
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

export default JsonForm;
