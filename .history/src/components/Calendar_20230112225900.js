import styled from "styled-components";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  //   ReactDatePicker;
  return (
    <>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        onSelect={(e) => console.log(e.target.value))}
      ></ReactDatePicker>
    </>
  );
}
