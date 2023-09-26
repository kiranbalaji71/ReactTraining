import React from "react";

const PassDate = ({ passDate }) => {
  return (
    <div>
      <p>Date 2 : {passDate.toLocaleString()}</p>
    </div>
  );
};

export default PassDate;
