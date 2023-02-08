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
  align-items: flex-end;
  flex-direction: column;
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

const Feed = ({ handleClick, todoData, setTodoData, handleAllRemoveClick }) => {
  const handleRemove = (id) => {
    console.log(id);
  };
  return (
    <>
      <StyledbuttonDiv>
        <div className="Feed_line" />
        <StyledRemoveButton onClick={handleAllRemoveClick}>
          모두 지우기
        </StyledRemoveButton>
      </StyledbuttonDiv>
      {todoData.map((list, i) => {
        return (
          <StyledTodoList key={i}>
            <StyledSpan>{list.title}</StyledSpan>
            <StyledDeleteImg src="/image/close.png" onClick={handleRemove} />
          </StyledTodoList>
        );
      })}
    </>
  );
};

export default Feed;
