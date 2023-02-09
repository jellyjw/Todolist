import { useState } from "react";
import styled from "styled-components";
import "../App.css";

const StyledTodoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTodoList = styled.li`
  list-style: none;
  margin: 10px 30px 10px 30px;
  font-size: 15px;
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
  :hover {
    background-color: #8c8f8d;
    transition: all 0.3s;
    color: white;
  }
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
  :hover {
    background-color: #8c8f8d;
    transition: all 0.3s;
    color: white;
  }
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
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 10px;
`;

const StyledSpan = styled.span`
  margin-right: 20px;
  margin-left: 15px;
`;

const StyledListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* overflow: scroll; */
`;

const StyledFeedDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledInputCheckBox = styled.input`
  width: 20px;
  height: 15px;
  margin-left: 10px;
`;

const getToday = (param) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const year = param.getFullYear();
  const month = param.getMonth() + 1;
  const date = param.getDate();
  const day = param.getDay();
  return `${year}년 ${month}월 ${date}일 ${week[day]}요일`;
};

const Feed = ({ onRemove, todoData, handleAllRemoveClick, setTodoData }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const { id, title, completed } = todoData;
  const url = "http://localhost:3001/data";

  const handleChange = (e) => {
    setIsCompleted(!isCompleted);
    let newTodo = {
      id,
      title,
      completed: e.target.checked ? true : false,
    };
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => {
      res.json(newTodo);
      setTodoData({ ...newTodo });
    });
  };

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
                <StyledTodoDiv>
                  <StyledInputCheckBox
                    type="checkbox"
                    onClick={handleChange}
                    // onClick={() => setIsCompleted(!isCompleted)}
                  />
                  <StyledSpan className={isCompleted ? "checked" : null}>
                    {list.title}
                  </StyledSpan>
                </StyledTodoDiv>
                <div>
                  {/* 수정버튼 */}
                  <StyledDeleteImg
                    src="/image/pencil.png"
                    // onClick={handleChange}
                  />
                  <StyledDeleteImg
                    src="/image/close.png"
                    onClick={() => onRemove(todoData[i].id)}
                  />
                </div>
              </StyledTodoList>
            );
          })}
        </StyledListUl>
      </StyledFeedDiv>
    </>
  );
};

export default Feed;
