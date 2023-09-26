import React, { useRef, useState } from "react";
import { Menu, Layout, Tabs, FloatButton, Tooltip, Tour, Grid } from "antd";
import {
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import FormDetail from "./components/FormDetail";
import ListDetail from "./components/ListDetail";
import UploadDetail from "./components/UploadDetail";

const { Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

function getItem(label, key, icon) {
  return {
    label: label,
    key: key,
    icon: icon,
  };
}

const items = [
  getItem("Home", "sub1", <HomeOutlined />),
  getItem("App", "sub2", <AppstoreOutlined />),
  getItem("Setting", "sub3", <SettingOutlined />),
  getItem("Add", "sub4", <PlusSquareOutlined />),
  getItem("Logout", "logout", <LogoutOutlined />),
];

const tabs = [
  {
    key: "1",
    label: "Form",
    children: <FormDetail />,
  },
  {
    key: "2",
    label: "List",
    children: <ListDetail />,
  },
  {
    key: "3",
    label: "Upload",
    children: <UploadDetail />,
  },
];

const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [open, setOpen] = useState(false);
  const screen = useBreakpoint();

  const steps = [
    {
      title: "Menu Bar",
      description: "Navigate your menu.",
      placement: "right",
      target: () => ref1.current,
    },
    {
      title: "Tabs",
      description: "Change the tabs.",
      placement: "center",
      target: () => ref2.current,
    },
  ];

  return (
    <Layout>
      {screen.md ? (
        <Tooltip placement="left" title="Hint">
          <FloatButton
            icon={<QuestionCircleOutlined />}
            type="primary"
            onClick={() => setOpen(true)}
          />
        </Tooltip>
      ) : null}
      <Layout style={{ height: "89vh" }}>
        {screen.md ? (
          <Sider
            style={{
              margin: 10,
              borderRadius: 10,
              backgroundColor: "#ffffff",
            }}
            ref={ref1}
          >
            <Menu
              mode="inline"
              items={items}
              defaultSelectedKeys={["sub1"]}
              style={{ borderRadius: 10 }}
            />
          </Sider>
        ) : null}
        <Content
          style={{
            margin: "12px 32px",
            padding: 20,
            borderRadius: 10,
            maxWidth: "100%",
            background: "#ffffff ",
          }}
          ref={ref2}
        >
          <Tabs defaultActiveKey="1" items={tabs} />
        </Content>
      </Layout>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          color: "rgba(0, 0, 0, .4)",
        }}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
      {!screen.md ? (
        <Footer style={{ padding: 0, width: "100%" }}>
          <Menu
            mode="horizontal"
            items={items.map((item) => ({ key: item.key, icon: item.icon }))}
            defaultSelectedKeys={["sub1"]}
          />
        </Footer>
      ) : (
        <Footer style={{ textAlign: "center" }}>© Copyright</Footer>
      )}
    </Layout>
  );
};

export default App;
