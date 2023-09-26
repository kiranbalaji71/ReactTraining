import React, { useEffect, useState } from "react";
import { List, Avatar, Typography } from "antd";

function ListDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const listValue = JSON.parse(localStorage.getItem("listValue")) || [];
    setData(listValue);
  }, [localStorage.getItem("listValue")]);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=0" />
              }
              title={<a>{item.username}</a>}
            />
            <Typography.Paragraph type="secondary" copyable>
              {item.message}
            </Typography.Paragraph>
          </List.Item>
        )}
      />
    </div>
  );
}
export default ListDetail;
