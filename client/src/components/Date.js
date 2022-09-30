import React from "react";
import LiveClock from "react-live-clock";

var current_date = new Date();
var year = current_date.getFullYear();
var month = current_date.getMonth() + 1;
var day = current_date.getDate();

var final_date = day + "/" + month + "/" + year; 

function DateTime() {
    return (
      <p>
        {final_date} <LiveClock format="hh:mm:ss a" ticking /> {" GMT+0400 (Gulf Standard Time)"}
      </p>
    );
  }
  
  export default DateTime;