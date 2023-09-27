import React, { useEffect } from "react";
import { List, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getApiData, itemSelectors } from "../features/fetch/fetchSlice";

const ItemFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  const items = useSelector(itemSelectors.selectAll);
  const { isLoading, error } = useSelector((state) => state.fetch);

  if (isLoading === "loading")
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

  if (isLoading === "failed")
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <List
        style={{ width: 500, margin: "auto" }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={<img width={100} alt={item.title} src={item.img} />}
          >
            <List.Item.Meta
              title={item.title}
              description={<p>$ {item.price}</p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ItemFetch;
