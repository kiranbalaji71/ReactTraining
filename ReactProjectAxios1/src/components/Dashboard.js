import React, { useEffect, useState } from "react";
import { PrivateAxios } from "../API/Axios";
import { Button, Layout, Typography, theme, Form, Space } from "antd";
import AddForm from "./AddForm";
import DisplayTable from "./DisplayTable";
import { PlusOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const [message, setMessage] = useState([]);
  const [update, setUpdate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const AddProduct = async (value) => {
    try {
      const response = await PrivateAxios.post("/add", {
        name: value.name,
        price: value.price,
        qty: value.qty,
        description: value.description,
      });
      setUpdate(response.data.data);
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await PrivateAxios.delete(`/delete/${id}`);
      setUpdate(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async (id, value) => {
    try {
      const response = await PrivateAxios.put(`/update/${id}`, {
        name: value.name,
        price: value.price,
        qty: value.qty,
        description: value.description,
      });
      setUpdate(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const Product = async () => {
      try {
        const response = await PrivateAxios.get("/getall");
        setMessage(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    Product();
  }, [update]);

  return (
    <Layout className="Layout">
      <Layout.Header
        className="Header"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Typography.Title level={3}>Dashboard</Typography.Title>
        <Space>
          <Button type="primary" onClick={() => setShowModal(true)}>
            <PlusOutlined /> Add
          </Button>
          <Button
            href="/signin"
            danger
            onClick={() => localStorage.removeItem("refreshToken")}
          >
            Logout
          </Button>
        </Space>
      </Layout.Header>
      <Layout.Content
        className="Content"
        style={{ backgroundColor: colorBgContainer }}
      >
        <DisplayTable
          message={message}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
        />

        <AddForm
          form={form}
          AddProduct={AddProduct}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Layout.Content>
    </Layout>
  );
};

export default Dashboard;
