import React, { useState } from "react";
import { Button, Divider, Switch } from "antd";
import WritePadSvg from "../../assets/icon-begin-assessment.svg";
import "./SelfAssessments.css";

const SelfAssessments = ({ routing }) => {
  const [initial, setInitial] = useState(false);

  const handleSwitchChange = () => {
    setInitial(!initial);
  };

  const items = [
    {
      title: "Depression/Anxiety",
      lastAssessment: "1 Aug 2023",
      nextAssessment: "16 Aug 2023",
    },
    {
      title: "Stress",
      lastAssessment: "11 Aug 2023",
      nextAssessment: "26 Aug 2023",
    },
  ];

  return (
    <div className="main">
      <div className="selfAssessment">
        <div className="selfAssessmentCol1">
          <img src={WritePadSvg} alt="Writepad" className="writePad" />
          <div className="heading">Let's start your assessment</div>
          <span>
            These are internationally validated symptom checklists used for
            detection of stress, depression and anxiety symptoms.
          </span>
          <div className="selfAssessmentCol2">
            <div className="paragraph">
              It should take less than 2 minutes to complete this assessment.
              <br />
              {routing === "self" && (
                <span>You can take this assessment every 15 days.</span>
              )}
            </div>
          </div>
        </div>
        <div className="selfAssessmentCol3">
          {routing === "self" &&
            items.map((item, index) =>
              initial ? (
                <div className="assessmentCard" key={index}>
                  <div className="symptoms">
                    <Button
                      type="primary"
                      className="symptomsButton"
                      onClick={() => {}}
                    >
                      {item.title}
                    </Button>
                  </div>
                  <div className="assessmentDates">
                    <div className="paragraph">
                      Last assessment taken on{" "}
                      <span onClick={() => {}}>{item.lastAssessment}</span>
                    </div>
                    <Divider className="divider" />
                    <div className="paragraph">
                      Next assessment can be taken on{" "}
                      <span onClick={() => {}}>{item.nextAssessment}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="initialSymptoms">
                  <Button className="initialButton" type="primary" block>
                    {item.title}
                  </Button>
                </div>
              )
            )}
          {routing === "funnel" && (
            <div className="initialSymptoms">
              <Button className="initialButton" type="primary" block>
                Begin
              </Button>
            </div>
          )}
        </div>
      </div>
      {routing === "self" && (
        <Switch
          className="switchButton"
          checkedChildren="true"
          unCheckedChildren="false"
          onChange={handleSwitchChange}
        />
      )}
    </div>
  );
};

export default SelfAssessments;
