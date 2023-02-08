import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  //   ReactDatePicker;
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        onSelect={(e) => console.log(e.toLocaleDateString())}
      ></DatePicker>
    </>
  );
}
