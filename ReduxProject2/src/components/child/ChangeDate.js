import { Button } from "antd";
import React, { useState } from "react";

const ChangeDate = ({ setPassDate }) => {
  const [date, setDate] = useState(new Date());
  let dateValue;

  const updateDate = () => {
    dateValue = new Date();
    setDate(dateValue);
    setTimeout(() => {
      setPassDate(dateValue);
    }, 1000);
  };

  return (
    <div>
      <p>Date 1 : {date.toString()}</p>
      <Button onClick={updateDate} block>
        update
      </Button>
    </div>
  );
};

export default ChangeDate;
