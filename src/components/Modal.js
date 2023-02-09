import "../App.css";
import styled from "styled-components";
import ModalItems from "./ModaItems";

export default function Modal({ todoData, isOpen, handleClickOpen }) {
  return (
    <div className="container">
      <div className={isOpen ? "show-menu" : "hide-menu"}>
        <ModalItems
          isOpen={isOpen}
          handleClickOpen={handleClickOpen}
          todoData={todoData}
        />
      </div>
    </div>
  );
}
