import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker";
import ko from "date-fns/locale/ko";

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
      <Container>
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          className="input-datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onSelect={(e) => console.log(e.toLocaleDateString())}
          minDate={new Date()}
        ></DatePicker>
      </Container>
    </>
  );
}
