import React from "react";
import "./DemoContent.css";
import DemoImage from "./DemoImage";
import DemoForm from "./DemoForm";

const DemoContent = () => {
  return (
    <div>
      <div className="demoContent">
        <DemoImage />
        <DemoForm />
      </div>
    </div>
  );
};

export default DemoContent;
