import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

function UploadDetail() {
  return (
    <div>
      <Upload accept=".xlsx">
        <Button icon={<UploadOutlined />}>Upload the file</Button>
      </Upload>
    </div>
  );
}

export default UploadDetail;
