import { Button, List, Typography, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../storage/passSlice";

function OutputValue() {
  const input = useSelector((state) => state.inputvalue.input);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <List
        bordered={false}
        dataSource={input}
        renderItem={(item) => (
          <List.Item>
            <Typography>{item.value}</Typography>
            <Button danger type="text" onClick={() => handleDelete(item.id)}>
              <DeleteOutlined />
            </Button>
          </List.Item>
        )}
      />
      <Button danger type="primary" href="/">
        Back
      </Button>
    </div>
  );
}

export default OutputValue;
