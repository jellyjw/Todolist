import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "../App.css";

const StyledTodoList = styled.li`
  list-style: none;
  margin: 10px 30px 10px 30px;
  font-size: 17px;
  font-weight: 700;
  background-color: white;
  border-radius: 40px;
  color: black;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 300px;
  border: 3px solid gray;
`;

const StyledRemoveButton = styled.button`
  border: 3px solid gray;
  font-weight: 700;
  font-size: 14px;
  background-color: white;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledbuttonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const StyledTodayDiv = styled.div`
  font-weight: 700;
  font-size: 18px;
  span {
    color: #f01972;
    font-size: 20px;
  }
`;

const StyledDeleteImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  margin-right: 20px;
  margin-left: 15px;
`;

const StyledListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFeedDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const getToday = (param) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const year = param.getFullYear();
  const month = param.getMonth() + 1;
  const date = param.getDate();
  const day = param.getDay();
  return `${year}년 ${month}월 ${date}일 ${week[day]}요일`;
};

const Feed = ({ onRemove, todoData, handleAllRemoveClick }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  // console.log(isCompleted);

  return (
    <>
      <div className="Feed_line" />
      <StyledbuttonDiv>
        <StyledTodayDiv>
          오늘은 <span>{getToday(new Date())}</span> 입니다.
        </StyledTodayDiv>
        <StyledRemoveButton onClick={handleAllRemoveClick}>
          모두 지우기
        </StyledRemoveButton>
      </StyledbuttonDiv>
      <StyledFeedDiv>
        <StyledListUl>
          {todoData.map((list, i) => {
            return (
              <StyledTodoList key={i}>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => setIsCompleted(!isCompleted)}
                  />
                  <StyledSpan>{list.title}</StyledSpan>
                </div>
                <StyledDeleteImg
                  src="/image/close.png"
                  onClick={() => onRemove(todoData[i].id)}
                />
              </StyledTodoList>
            );
          })}
        </StyledListUl>
      </StyledFeedDiv>
    </>
  );
};

export default Feed;
