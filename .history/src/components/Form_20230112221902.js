import { useRef } from "react";
import styled from "styled-components";

const StyledContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledFormInput = styled.input`
  border: 3px solid gray;
  width: 550px;
  height: 20px;
  padding: 20px;
  border-radius: 10px;
  margin-right: 20px;
  font-size: larger;
  font-weight: 700;
`;

const StyledSubmitInput = styled.input`
  border: 3px solid gray;
  width: 80px;
  height: 70px;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

const Form = ({ setValue, value, handleSubmit }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const arr = [
    { name: "jangjiwoo", age: 29 },
    { name: "1", age: 27 },
    { name: "2", age: 28 },
  ];

  return (
    <>
      <StyledContainerDiv>
        <div>
          <form onSubmit={handleSubmit}>
            {arr.map((el) => {
              return (
                <StyledFormInput
                  type="text"
                  name="value"
                  placeholder={el.age}
                  value={value}
                  onChange={handleChange}
                  className="shadow"
                />
              );
            })}
            {/* <StyledFormInput
              type="text"
              name="value"
              placeholder="해야 할 일을 입력하세요"
              value={value}
              onChange={handleChange}
              className="shadow"
            /> */}
            <StyledSubmitInput type="submit" value="입력" className="shadow" />
          </form>
        </div>
      </StyledContainerDiv>
    </>
  );
};

export default Form;
