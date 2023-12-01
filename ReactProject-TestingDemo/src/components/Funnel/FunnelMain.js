import React, { useState } from "react";
import { Button, Card, message } from "antd";
import Adolescent from "../../assets/img-adolescent.svg";
import Adult from "../../assets/img-adult.svg";
import Senior from "../../assets/img-senior-adult.svg";
import Uncheck from "../../assets/Group 587 - 1.svg";
import Check from "../../assets/Group-1.svg";
import "./Funnel.css";
import { useNavigate } from "react-router-dom";
import FunnelFooter from "./FunnelFooter";

const FunnelMain = () => {
  const [checked, setChecked] = useState(null);
  const nav = useNavigate();
  const funnelCardItem = [
    {
      id: 1,
      image: Adolescent,
      route: "/adolescent",
    },
    {
      id: 2,
      image: Adult,
      route: "/adult",
    },
    {
      id: 3,
      image: Senior,
      route: "/senior-adult",
    },
  ];

  const handleNextPage = () => {
    if (checked) {
      const routing = funnelCardItem.find((item) => item.id === checked);
      if (routing) {
        nav(`/funnel${routing.route}`);
      }
    } else {
      message.error("Please select a option.");
    }
  };

  return (
    <div className="funnelStructure">
      <div className="funnelStructureHeader">
        <div className="heading">Treatment Programs by Age</div>
      </div>
      <div className="funnelStructureCol1">
        <span>
          Choose an option to recommend the right type of guidance for who needs
          care.
        </span>
      </div>
      <div className="funnelStructureCol2">
        <div className="cardAlign">
          {funnelCardItem.map((item, index) => (
            <div className="funnelCard" onClick={() => setChecked(item.id)}>
              <Card key={index}>
                <img src={item.image} alt="funnelImg" />
              </Card>
              <div className="checked">
                <img
                  src={checked === item.id ? Check : Uncheck}
                  alt="checked"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="nextAlign">
          <Button
            className="nextButton"
            type="primary"
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </div>
      <FunnelFooter />
    </div>
  );
};

export default FunnelMain;
