import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber } from "antd";

const DisplayTable = ({ message, deleteProduct, updateProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [form] = Form.useForm();

  const handleEdit = (item) => {
    setEditValue(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((value) => {
      setIsModalOpen(false);
      updateProduct(editValue.id, value);
    });
  };

  const cols = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "actions",
      render: (item) => (
        <div>
          <Button type="link" onClick={() => handleEdit(item)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={message} columns={cols} pagination={{ pageSize: 6 }} />
      <Modal
        title="Update Data"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} initialValues={editValue}>
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
    </div>
  );
};

export default DisplayTable;
