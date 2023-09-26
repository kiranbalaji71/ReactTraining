import React from "react";
import { Button, Space } from "antd";

const DisplayCount = ({ increment, decrement, count }) => {
  return (
    <div>
      <Space>
        <Button
          type="text"
          onClick={decrement}
          disabled={count <= 0 ? true : false}
        >
          -
        </Button>
        <p>{count}</p>
        <Button type="text" onClick={increment}>
          +
        </Button>
      </Space>
    </div>
  );
};

export default DisplayCount;
