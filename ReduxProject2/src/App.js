import React from "react";
import { Layout, Menu, theme } from "antd";
import { PlusSquareOutlined, FileOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";
import API from "./components/API";
import ItemFetch from "./components/ItemFetch";
import PropsPassing from "./components/PropsPassing";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePost />} />
      <Route path="/output" element={<ViewPost />} />
      <Route path="/api" element={<API />} />
      <Route path="/fetch" element={<ItemFetch />} />
      <Route path="/pass" element={<PropsPassing />} />
    </Routes>
  );
};

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate();
  return (
    <div className="App">
      <Layout>
        <Layout.Header
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            zIndex: 1,
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="horizontal"
            onClick={({ key }) => {
              nav(key);
            }}
            items={[
              {
                label: "Create Post",
                key: "/",
                icon: <PlusSquareOutlined />,
              },
              {
                label: "New Post",
                key: "/output",
                icon: <FileOutlined />,
              },
              {
                label: "API",
                key: "/fetch",
              },
              {
                label: "Props",
                key: "/pass",
              },
            ]}
          />
        </Layout.Header>
        <Layout.Content
          style={{
            padding: 100,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Content />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
