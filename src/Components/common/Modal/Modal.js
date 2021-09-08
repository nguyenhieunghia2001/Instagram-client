import React from "react";
import './style.scss'

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="wrapper">
        <div className="header"></div>
        <div className="cont">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
