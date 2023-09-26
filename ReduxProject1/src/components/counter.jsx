import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addBy, reset } from "../storage/counterSlice";
import { Typography, Button, Space } from "antd";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ width: 400, textAlign: "center" }}>
      <Typography.Title>Counter</Typography.Title>
      <Typography.Title level={3}>{count}</Typography.Title>
      <Space>
        <Button type="text" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button type="text" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button type="text" onClick={() => dispatch(addBy(10))}>
          Add by 10
        </Button>
        <Button type="text" onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </Space>
    </div>
  );
}

export default Counter;
