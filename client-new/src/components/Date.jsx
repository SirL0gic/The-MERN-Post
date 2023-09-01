import React, { useState, useEffect } from "react";
import moment from "moment";


let DateTime = () => {
  const [currentTime, setCurrentTime] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000); // Updates every second
    return () => clearInterval(interval);
  }, []);

  return <> Date and Time: {currentTime}</>;
};
export default DateTime;
