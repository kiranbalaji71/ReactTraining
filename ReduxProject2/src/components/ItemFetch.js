import React, { useEffect } from "react";
import { List, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../features/fetch/fetchSlice";

const ItemFetch = () => {
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Spin size="large" />
      </div>
    );

  return (
    <div>
      <List
        style={{ width: 500, margin: "auto" }}
        dataSource={item}
        renderItem={(items) => (
          <List.Item
            key={items.id}
            extra={<img width={100} alt={items.title} src={items.img} />}
          >
            <List.Item.Meta
              title={items.title}
              description={<p>$ {items.price}</p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ItemFetch;
