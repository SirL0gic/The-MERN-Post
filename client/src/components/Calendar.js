import React, {useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CalendarWidget() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
  }

  export default Calendar;