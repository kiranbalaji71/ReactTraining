import React, { useEffect, useRef, useState } from "react";
import { Button, Select, Input, Space, Typography } from "antd";
import { AudioFilled, CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import createSpeechServicesPonyfill from "web-speech-cognitive-services";
import Language from "../assets/Language.json";

// const SUBSCRIPTION_KEY = "8667d6dcec594423b8d23069e18dd9da";
// const REGION = "centralindia";

// const { SpeechRecognition: AzureSpeechRecognition } =
//   createSpeechServicesPonyfill({
//     credentials: {
//       region: REGION,
//       subscriptionKey: SUBSCRIPTION_KEY,
//     },
//   });

// SpeechRecognition.applyPolyfill(
//   AzureSpeechRecognition,
//   "c49ae24a-774b-422a-b7dd-34d2aef5f957"
// );

const SpeechToText = () => {
  const commands = [
    {
      command: ["My name is *", "I am *"],
      callback: (name) => console.log(name),
    },
    {
      command: ["I am * years old", "I'm * years old"],
      callback: (age) => console.log(age),
    },
  ];

  const lang = useRef("en-IN");
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  const [text, setText] = useState(transcript);
  const [isListening, setIsListening] = useState(false);

  const handleToggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      console.log(transcript);
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: lang.current,
      });
    }
    setIsListening(!isListening);
  };

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="textPad">
        <Typography.Paragraph>
          This browser doesn't support speech-to-text
        </Typography.Paragraph>
      </div>
    );
  }

  return (
    <div className="textPad">
      <Typography.Title level={3}>React Speech Recognition</Typography.Title>
      <Input.TextArea
        rows={16}
        bordered={false}
        placeholder="Click on the Start button and begin to speak"
        style={{ resize: "none" }}
        value={text}
      />
      <div className="functionButtons">
        <Space>
          <Button
            className={`${isListening ? "stop" : "start"}Button`}
            type="primary"
            onClick={handleToggleListening}
          >
            {isListening ? <LoadingOutlined /> : <AudioFilled />}{" "}
            {isListening ? "Stop" : "Start"}
          </Button>
          <Button
            className="clearButton"
            type="primary"
            danger
            onClick={resetTranscript}
          >
            <CloseOutlined /> Clear
          </Button>
          <Select
            className="language"
            defaultValue="en-IN"
            onChange={(value) => {
              lang.current = value;
            }}
            options={Language}
          />
        </Space>
      </div>
    </div>
  );
};

export default SpeechToText;
