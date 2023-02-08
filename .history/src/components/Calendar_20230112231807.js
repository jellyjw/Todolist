import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker";
import ko from "date-fns/locale/ko";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
          dayClassName={(d) =>
            d.getDate() === date.getDate()
              ? 'custom-day selected-day'
              : d.getMonth() === month
              ? 'custom-day'
              : 'custom-day gray-day'
        ></DatePicker>
      </Container>
    </>
  );
}
