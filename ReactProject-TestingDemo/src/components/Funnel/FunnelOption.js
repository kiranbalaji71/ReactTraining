import React, { useState } from "react";
import FunnelFooter from "./FunnelFooter";
import "./Funnel.css";
import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const FunnelOption = () => {
  const [extraCondition, setExtraCondition] = useState(false);
  const [selectButton, setSelectButton] = useState([]);
  const nav = useNavigate();

  const funnelOptionItem = [
    "Need to reduce stress",
    "Feeling anxious, fearful, panicky",
    "Need emotional or psychological support",
    "Need to sleep better",
    "Feeling sad, hopeless, depressed",
  ];

  const otherCondition = [
    "Alcohol/Substance dependence",
    "Schizophrenia",
    "Bipolar Disorder",
    "Eating disorder",
    "Obsessive Compulsive Disorder (OCD)",
    "Post Traumatic Stress disorders (PTSD)",
    "Attention Deficit Hyperactivity Disorder (ADHD)",
    "Premenstrual Dysphoric Disorder (PMDD)",
    "Post-partum Depression",
    "Gender Identity (LGBTQ)",
  ];

  const handleSelectButton = (index) => {
    const includeIndex = selectButton.includes(index);
    if (includeIndex) {
      setSelectButton(selectButton.filter((item) => item !== index));
    } else {
      setSelectButton([...selectButton, index]);
    }
  };

  return (
    <div className="funnelStructure">
      <div className="funnelStructureHeader">
        <div className="heading">What brings you to Niyama</div>
      </div>

      <div className="funnelStructureCol1">
        <span>Choose one or more options</span>
      </div>

      <div className="funnelStructureCol3">
        <div className="funnelOption">
          <div className="boxRow">
            {funnelOptionItem.map((item, index) => (
              <div className="boxColumn">
                <Button
                  className={
                    selectButton.includes(index)
                      ? "optionButtonActive"
                      : "optionButton"
                  }
                  key={index}
                  onClick={() => handleSelectButton(index)}
                  block
                >
                  {item}
                </Button>
              </div>
            ))}
            <div className="boxColumn">
              <Button
                className={extraCondition ? "moreOptionButton" : "optionButton"}
                onClick={() => setExtraCondition(!extraCondition)}
                block
              >
                Other Conditions
              </Button>
            </div>
          </div>
          {!extraCondition && (
            <div className="nextAlign">
              <Button
                className="nextButton"
                type="primary"
                onClick={() => nav("/funnel/assessment")}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>

      {extraCondition && (
        <>
          <Divider className="funnelDivider" />
          <div className="funnelStructureCol1">
            <span>Other Conditions</span>
          </div>
          <div className="funnelStructureCol3">
            <div className="funnelOption">
              <div className="boxRow">
                {otherCondition.map((item, index) => (
                  <div className="boxColumn">
                    <Button
                      className={
                        selectButton.includes(`1.${index}`)
                          ? "optionButtonActive"
                          : "optionButton"
                      }
                      key={`1.${index}`}
                      onClick={() => handleSelectButton(`1.${index}`)}
                      block
                    >
                      {item}
                    </Button>
                  </div>
                ))}
              </div>
              <div className="nextAlign">
                <Button
                  className="nextButton"
                  type="primary"
                  onClick={() => nav("/funnel/assessment")}
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      <FunnelFooter />
    </div>
  );
};

export default FunnelOption;
