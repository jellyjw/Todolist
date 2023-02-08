import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Form from "./components/Form";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { getData, postData } from "./data/useFetch";

const StyledContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const StyledMainSection = styled.section`
  width: 900px;
  height: 700px;
  background-color: #ffcece;
  border-radius: 15px;
  border: 20px solid black;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0.9, 0.9) 25px 25px 25px -10px;
`;

const StyledValueCheck = styled.div`
  color: red;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

function App() {
  const url = "http://localhost:3001/data";

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getData(url, setTodoData);
  }, []);

  const onRemove = (targetId) => {
    fetch(`${url}/${targetId}`, {
      method: "DELETE",
    }).then(() => {
      setTodoData(todoData.filter((it) => it.id !== targetId));
    });
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (value.length === 0) {
      setErrorMessage("할 일을 입력해주세요!");
      return;
    } else {
      //새로운 할 일 데이터
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };

      postData(url, newTodo);
      getData(url, setTodoData); // 새로고침 없이 데이터 갱신 확인을 위해
      setValue("");
    }
  };

  const handleAllRemoveClick = () => {
    setTodoData([]);
  };

  return (
    <>
      <StyledContainerDiv>
        <StyledMainSection>
          <Modal handleClickOpen={handleClickOpen} isOpen={isOpen} />
          <Nav
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleClickOpen={handleClickOpen}
          />
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
          {<StyledValueCheck>{errorMessage}</StyledValueCheck>}
          <Feed
            onRemove={onRemove}
            todoData={todoData}
            setTodoData={setTodoData}
            handleAllRemoveClick={handleAllRemoveClick}
          />
        </StyledMainSection>
      </StyledContainerDiv>
    </>
  );
}
export default App;
