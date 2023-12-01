import React from "react";
import { Button, Form, Input } from "antd";
import { InputOTP } from "antd-input-otp";
import { EditOutlined, PhoneFilled } from "@ant-design/icons";

const DemoForm = () => {
  return (
    <div className="demoForm">
      <Form layout="vertical" style={{ width: "80%" }}>
        <h2>Login to your account</h2>
        <Form.Item label="Mobile Number" rules={[{ required: true }]}>
          <Input
            placeholder="Mobile Number"
            className="mobileInput"
            suffix={
              <EditOutlined onClick={() => {}} style={{ color: "#118e44" }} />
            }
          ></Input>
        </Form.Item>

        <Form.Item label="Enter the OTP sent to your mobile number" name="otp">
          <div className="otpColumn">
            <InputOTP type="numeric" length={4} />
            <span className="otpQuery">
              Didnt Recieve OTP? <span onClick={() => {}}>Resend OTP</span>
            </span>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="verifyOtp">
            Verify OTP
          </Button>
        </Form.Item>
        <span className="troubleReceiving">
          Trouble receiving OTP? <span>Get OTP in call {<PhoneFilled />}</span>
        </span>
      </Form>
    </div>
  );
};

export default DemoForm;
