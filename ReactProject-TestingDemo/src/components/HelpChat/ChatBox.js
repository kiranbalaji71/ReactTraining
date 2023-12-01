import React from "react";
import ChatOption from "./ChatOption";
import ChatFeedback from "./ChatFeedback";
import InnerChat from "./InnerChat";
import ChatQuestion from "./ChatQuestion";

const ChatBox = ({
  togglePopup,
  showPopup,
  setShowPopup,
  routeLinks,
  Logo,
}) => {
  return (
    <div className="chatPopup">
      {""}
      {showPopup === "chatOption" && (
        <ChatOption
          routeLinks={routeLinks}
          togglePopup={togglePopup}
          setShowPopup={setShowPopup}
          Logo={Logo}
        />
      )}
      {showPopup === "innerChat" && (
        <InnerChat setShowPopup={setShowPopup} Logo={Logo} />
      )}
      {showPopup === "chatFeedback" && (
        <ChatFeedback setShowPopup={setShowPopup} togglePopup={togglePopup} />
      )}
      {showPopup === "chatQuestion" && (
        <ChatQuestion setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default ChatBox;
