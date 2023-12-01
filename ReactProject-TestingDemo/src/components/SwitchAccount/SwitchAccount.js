import React, { useState } from "react";
import { Button, Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Select from "../../assets/Group.svg";
import Unselect from "../../assets/Group 587.svg";
import "./SwitchAccount.css";

const SwitchAccount = () => {
  const [selectCheckbox, setSelectCheckbox] = useState(null);
  const nav = useNavigate();
  const cardItem = [
    {
      id: 1,
      title: "For Myself",
      description: "Create an individual account for you",
      route: "/self",
    },
    {
      id: 2,
      title: "For Dependent",
      description: "Create an account for anyone you care",
      route: "/dependent",
    },
  ];

  return (
    <div className="switchAccount">
      <div className="switchAccountHeader">
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
          <div className="heading">Add New Member</div>
        </div>
      </div>
      <div className="switchAccountCol1">
        <div className="heading">Let’s get your account set up</div>
        <span>
          To make sure we get this right, we need some basic details and
          guardian’s consent.
        </span>
      </div>
      <div className="switchAccountCol2">
        <div>
          <div className="heading">Create Account</div>
          <span>Choose an option based on who requires care.</span>
        </div>
      </div>
      <div className="switchAccountCol3">
        <div className="cardAlign">
          {cardItem.map((item, index) => (
            <Card
              key={index}
              onClick={() => setSelectCheckbox(item.id)}
              className={selectCheckbox === item.id ? "selectCard" : ""}
            >
              <img
                src={selectCheckbox === item.id ? Select : Unselect}
                alt="selected"
              />
              <div className="title">{item.title}</div>
              <span>{item.description}</span>
            </Card>
          ))}
        </div>
      </div>
      <div className="switchAccountFooter">
        <Button className="continueButton" type="primary" onClick={() => {}}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SwitchAccount;
