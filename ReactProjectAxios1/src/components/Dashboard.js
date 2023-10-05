import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Layout, Typography, theme, Form, Space } from "antd";
import AddForm from "./AddForm";
import DisplayTable from "./DisplayTable";

const Dashboard = ({ url }) => {
  const [message, setMessage] = useState([]);
  const [update, setUpdate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const [form] = Form.useForm();
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const refresh = async () => {
    let config = {
      method: "get",
      url: `${url}/user/refresh`,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    };
    try {
      const response = await axios.request(config);
      setAccessToken(response.data["new access"]);
    } catch (err) {
      console.log(err);
    }
  };

  const AddProduct = async (value) => {
    let config = {
      method: "post",
      url: `${url}/add`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: value.name,
        price: value.price,
        qty: value.qty,
        description: value.description,
      },
    };
    try {
      const response = await axios.request(config);
      setUpdate(response.data.data);
      console.log(response.data);
      form.resetFields();
    } catch (err) {
      console.log(err);
      refresh();
    }
  };

  const deleteProduct = (id) => {
    let config = {
      method: "delete",
      url: `${url}/delete/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = axios.request(config);
      setUpdate(response.data.data);
    } catch (err) {
      console.log(err);
      refresh();
    }
  };

  const updateProduct = (id, value) => {
    let config = {
      method: "put",
      url: `${url}/update/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: value.name,
        price: value.price,
        qty: value.qty,
        description: value.description,
      },
    };
    try {
      const response = axios.request(config);
      setUpdate(response.data.data);
    } catch (err) {
      console.log(err);
      refresh();
    }
  };

  useEffect(() => {
    let config = {
      method: "get",
      url: `${url}/getall`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const Product = async () => {
      try {
        const response = await axios.request(config);
        setMessage(response.data.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
        refresh();
      }
    };

    Product();
  }, [accessToken, update]);

  return (
    <Layout className="Layout">
      <Layout.Header
        className="Header"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Typography.Title level={3}>Dashboard</Typography.Title>
        <Space>
          <Button type="primary" onClick={() => setShowModal(true)}>
            Add
          </Button>
          <Button
            href="/signin"
            danger
            onClick={() => localStorage.removeItem("login")}
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
