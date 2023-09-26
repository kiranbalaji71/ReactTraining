import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Input, Space, Typography } from "antd";
import { addData } from "../storage/passSlice";

function InputValue() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addData(inputValue));
    setInputValue("");
  };

  return (
    <div
      style={{
        width: 400,
        margin: "auto",
      }}
    >
      <Input
        placeholder="Please enter any value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Space>
        <Button htmlType="sumbit" onClick={handleSubmit}>
          Add value
        </Button>
        <Button type="primary" htmlType="sumbit" href="/output">
          Output
        </Button>
      </Space>
    </div>
  );
}

export default InputValue;
