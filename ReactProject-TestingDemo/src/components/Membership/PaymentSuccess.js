import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Switch } from "antd";
import Box from "../../assets/Vector.svg";
import Circle from "../../assets/Vector-1.svg";
import Line from "../../assets/Vector-2.svg";
import Check from "../../assets/check.svg";
import "./Membership.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [coupon, setCoupon] = useState(false);
  const nav = useNavigate();

  const handleSwitchChange = () => {
    setCoupon(!coupon);
  };

  const paymentDetails = {
    activationDate: "12 Aug 2023, 01:45 PM",
    transactionId: "HDFC04GVCN",
    cardDetails: [
      { title: "Order ID", values: "P7DN04GVCN" },
      { title: "Total Price", values: "₹3,999.00" },
      coupon
        ? { title: "Applied Coupon", values: "NHIP" }
        : { title: "", values: "" },
      { title: "Discount(-)", values: `₹${coupon ? "3,999.00" : "0.00"}` },
    ],
    paid: [{ title: "Paid", values: `₹${coupon ? "0.00" : "3,999.00"}` }],
  };

  return (
    <div className="payment">
      <div className="paymentMain">
        <div className="paymentHeader">
          <div>
            <Button
              className="backButton"
              type="primary"
              onClick={() => nav("/")}
            >
              <LeftOutlined />
              Back
            </Button>
          </div>
          <div className="titleHeader">
            <div className="heading">Payment Successful!</div>
          </div>
        </div>
        <div className="paymentImage">
          <div className="image">
            <img src={Box} alt="box" className="box" />
            <img src={Line} alt="line" className="line" />
            <img src={Circle} alt="circle" className="circle" />
            <img src={Check} alt="check" className="check" />
          </div>
        </div>
        <div className="paymentDescription">
          <div className="activitonDate">
            <div className="paragraph">
              Plan activated on {paymentDetails.activationDate}
            </div>
          </div>
          <div className="activitionBill">
            <Card title="Niyama Holistic Integrative Plan">
              <div className="context">
                {!coupon && (
                  <div className="transaction">
                    <div className="transactionId">
                      Transaction ID:{" "}
                      <span>{paymentDetails.transactionId}</span>
                    </div>
                  </div>
                )}

                {paymentDetails.cardDetails.map((row, index) =>
                  row.title === "" && row.values === "" ? null : (
                    <>
                      <div key={index} className="row">
                        <div className="title">{row.title}</div>
                        <div
                          className={
                            row.title === "Applied Coupon"
                              ? "valueCoupon"
                              : "value"
                          }
                        >
                          {row.values}
                        </div>
                      </div>
                      <Divider />
                    </>
                  )
                )}
                {paymentDetails.paid.map((row, index) => (
                  <div key={index} className="row">
                    <div className="paidTitle">{row.title}</div>
                    <div className="paidValue">{row.values}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="paymentFooter">
        <Button className="doneButton" type="primary" onClick={() => nav("/")}>
          Done
        </Button>
      </div>
      <div className="dummy">
        Coupon{" "}
        <Switch
          className="switchButton"
          checkedChildren="ON"
          unCheckedChildren="OFF"
          onChange={handleSwitchChange}
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
