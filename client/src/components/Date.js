import React from "react";
import LiveClock from "react-live-clock";

let current_date = new Date();
let year = current_date.getFullYear();
let month = current_date.getMonth() + 1;
let day = current_date.getDate();
let final_date = day + "/" + month + "/" + year; 
let time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function DateTime() {
    return (
      <p>
        Date: {final_date} &nbsp; Time: <LiveClock format="hh:mm:ss a" ticking /> {" " + time_zone}
      </p>
    );
  }
export default DateTime;