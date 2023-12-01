import React from "react";
import SpeechToText from "./SpeechToText";
import MedicalForm from "./MedicalForm";

const SpeechRecognition = () => {
  return (
    <div className="App">
      <SpeechToText />
      <div className="verticalLine" />
      <MedicalForm />
    </div>
  );
};

export default SpeechRecognition;
