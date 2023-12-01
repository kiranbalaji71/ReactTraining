import { Tabs } from "antd";
import React from "react";
import "./JsonTab.css";
import JsonContent from "./JsonContent";

const JsonTab = () => {
  const items = [
    {
      key: "1",
      label: "App Versions",
      children: <JsonContent />,
    },
  ];

  return (
    <div className="jsonTab">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default JsonTab;
