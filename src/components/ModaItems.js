import "../App.css";
import styled from "styled-components";

const StyledProfileimg = styled.img`
  width: 50px;
  height: 50px;
  display: inline-block;
  margin: 10px 20px 0px 10px;
`;

const StyledDeleteImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  background-color: white;
  margin: 20px;
`;

const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    flex-direction: row;
  }
`;

export default function ModalItems({ handleClickOpen, isOpen, todoData }) {
  return (
    <div className={isOpen ? "ModalItemcontainer" : "hidden"}>
      <StyledDeleteImg onClick={handleClickOpen} src="/image/close.png" />
      <StyledContainerDiv className="container">
        <div className="container_chil">
          <StyledProfileimg src="/image/profile-user.png" />
          <div>
            <h1>jang</h1>
            <h4 style={{ marginTop: "3px" }}>가입하기</h4>
          </div>
        </div>
        <section>
          <div style={{ margin: "20px" }}>
            오늘의 할일은 {todoData.length} 개 입니다.
          </div>
        </section>
      </StyledContainerDiv>
    </div>
  );
}
