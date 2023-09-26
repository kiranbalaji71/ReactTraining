import React from "react";
import { Card, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Sample from "./sample.json";

function CardDetail() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {Sample.map((item) => (
        <Card
          hoverable
          style={{ width: 250 }}
          bordered
          title={item.name}
          cover={
            <img
              alt="example"
              src={item.imageUrl}
              style={{ width: 250, height: 250 }}
            />
          }
          extra={<div>{<MoreOutlined />}</div>}
        >
          <Typography.Paragraph ellipsis>
            {item.description}
          </Typography.Paragraph>
        </Card>
      ))}
    </div>
  );
}

export default CardDetail;
