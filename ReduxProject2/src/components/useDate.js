import { useEffect, useState } from "react";

const useDate = (includeDate) => {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    console.log("calling date and time ");
    setDateTime({
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    });
  }, [includeDate]);

  return includeDate ? dateTime.date + " " + dateTime.time : null;
};

export default useDate;
