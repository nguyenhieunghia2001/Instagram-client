import React, { useEffect, useRef } from "react";
import "./style.scss";

const Modal = ({ children, width = 400, isShowing, hide }) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef?.current &&
        !wrapperRef?.current.contains(event.target) &&
        isShowing
      ) {
        hide();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, hide, isShowing]);
  return (
    <div className="modal-custom">
      <div className="wrapper" style={{ width: width }} ref={wrapperRef}>
        <div className="header"></div>
        <div className="cont">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
