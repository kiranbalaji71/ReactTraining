import React from "react";
import { Layout, theme, Menu } from "antd";
import Headers from "./components/Headers";
import Contents from "./components/Contents";
import {
  AudioOutlined,
  BellOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  CrownOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import HelpChat from "./components/HelpChat/HelpChat";
const { Header, Content, Sider } = Layout;

const App = () => {
  const nav = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const MenuItem = [
    {
      key: "",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "notify",
      icon: <BellOutlined />,
      label: "Notification",
    },
    {
      key: "speech",
      icon: <AudioOutlined />,
      label: "Speech Recognition",
    },
    {
      key: "assessment",
      icon: <FileTextOutlined />,
      label: "Assessments",
    },
    {
      key: "membership",
      icon: <CrownOutlined />,
      label: "MemberShip",
    },
    {
      key: "health",
      icon: <InfoCircleOutlined />,
      label: "Health Info",
    },
    {
      key: null,
      icon: <SettingOutlined />,
      label: "Setting",
      children: [
        {
          key: "profile",
          icon: <UserOutlined />,
          label: "Profile",
        },
        {
          key: "account",
          icon: <UserSwitchOutlined />,
          label: "Account",
        },
      ],
    },
  ];

  return (
    <div>
      <Layout style={{ backgroundColor: colorBgContainer }}>
        <div className="sider">
          <Sider
            defaultCollapsed={true}
            collapsible
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              theme="light"
              mode="inline"
              onClick={(item) => nav(item.key)}
              items={MenuItem}
            />
          </Sider>
        </div>
        <Layout>
          <Header
            style={{
              height: "auto",
              background: colorBgContainer,
            }}
          >
            <Headers />
          </Header>
          <Content
            className="content"
            style={{
              background: colorBgContainer,
            }}
          >
            <Contents />
          </Content>
        </Layout>
      </Layout>
      <HelpChat />
    </div>
  );
};

export default App;
