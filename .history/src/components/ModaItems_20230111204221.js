import "../App.css";
import styled from "styled-components";

const StyledProfileimg = styled.img`
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-left: 25px;
`;

const StyledDeleteImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  background-color: white;
  margin: 20px;
`;

export default function ModalItems({ handleClickOpen }) {
  return (
    <div className={isOpen ? "ModalItemcontainer" : "hidden"}>
      <StyledDeleteImg onClick={handleClickOpen} src="/image/close.png" />
      <div className="container">
        <StyledProfileimg src="/image/profile-user.png" />
        <div className="container_chil">
          <h1>jang</h1>
          <h4 style={{ marginTop: "3px" }}>가입하기</h4>
        </div>
      </div>
    </div>
  );
}
