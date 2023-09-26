import React, { useState } from "react";
import DisplayCount from "./child/DisplayCount";
import ChangeDate from "./child/ChangeDate";
import PassDate from "./child/PassDate";
import { Typography } from "antd";

const PropsPassing = () => {
  const [passDate, setPassDate] = useState(new Date());
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <Typography.Title level={4}>Count:</Typography.Title>

      <DisplayCount
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
        count={count}
      />

      <Typography.Title level={4}>Date:</Typography.Title>

      <ChangeDate setPassDate={(e) => setPassDate(e)} />
      <PassDate passDate={passDate} />
    </div>
  );
};

export default PropsPassing;
