import { useState } from "react";
import styled from "styled-components";

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StylednavImgDiv = styled.img`
  width: 50px;
  height: 50px;
  margin: 30px;
  cursor: pointer;
`;

const Nav = ({ setIsOpen, isOpen, handleClickOpen }) => {
  return (
    <>
      <StyledNavContainer>
        <StylednavImgDiv src="image/dog.png" alt="todo이미지" />
        <StylednavImgDiv
          onClick={handleClickOpen}
          src="image/more.png"
          alt="Nav메뉴"
        />
      </StyledNavContainer>
    </>
  );
};

export default Nav;
