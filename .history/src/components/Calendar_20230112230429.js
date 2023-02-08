import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Container = styled.div`
  width: 500px;
  height: 100px;
  background-color: gray;
`;

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
