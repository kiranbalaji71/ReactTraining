import React from "react";
import { Route, Routes } from "react-router-dom";
import Notification from "./Notification/Notification";
import DisplayNotification from "./Notification/DisplayNotification";
import SpeechRecognition from "./SpeechRecognition";
import JsonTab from "./Setting/JsonTab";
import DemoContent from "./Demo/DemoContent";
import SelfAssessments from "./Assessment/SelfAssessments";
import SwitchAccount from "./SwitchAccount/SwitchAccount";
import FunnelMain from "./Funnel/FunnelMain";
import FunnelOption from "./Funnel/FunnelOption";
import PaymentSuccess from "./Membership/PaymentSuccess";

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notification />} />
        <Route
          path="/notify"
          element={<DisplayNotification route={"notify"} />}
        />
        <Route path="/speech" element={<SpeechRecognition />} />
        <Route
          path="/assessment"
          element={<SelfAssessments routing="self" />}
        />
        <Route path="/membership" element={<PaymentSuccess />} />
        <Route path="/health" element={<DemoContent />} />
        <Route path="/funnel" element={<FunnelMain />} />
        <Route path="/funnel/adolescent" element={<FunnelOption />} />
        <Route path="/funnel/adult" element={<FunnelOption />} />
        <Route path="/funnel/senior-adult" element={<FunnelOption />} />
        <Route
          path="/funnel/assessment"
          element={<SelfAssessments routing="funnel" />}
        />
        <Route
          path="/appointment"
          element={<div className="textPad">Meeting Page</div>}
        />
        <Route
          path="/patient"
          element={<div className="textPad">Patient Page</div>}
        />
        <Route path="/profile" element={<JsonTab />} />
        <Route path="/account" element={<SwitchAccount />} />
      </Routes>
    </div>
  );
};

export default Contents;
