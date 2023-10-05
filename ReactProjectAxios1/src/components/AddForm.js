import React from "react";
import { Form, Input, InputNumber, Modal } from "antd";

const AddForm = ({ form, AddProduct, showModal, setShowModal }) => {
  const handleOk = () => {
    form.validateFields().then((value) => {
      AddProduct(value);
      form.resetFields();
      setShowModal(false);
    });
  };
  return (
    <Modal
      title="Add Data"
      open={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <Form form={form}>
        <Form.Item name="name">
          <Input placeholder="name of the product" />
        </Form.Item>
        <Form.Item name="price">
          <InputNumber
            placeholder="price of the product"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="qty">
          <InputNumber
            placeholder="quantity of the product"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea rows={2} placeholder="description of the product" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddForm;
