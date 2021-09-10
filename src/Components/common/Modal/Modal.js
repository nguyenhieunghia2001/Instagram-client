import React, { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import "./style.scss";

const Modal = ({ children, width = 400, height="auto", isShowing, hide, title }) => {
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
      <div
        className="wrapper container"
        style={{ width: width, height: height }}
        ref={wrapperRef}
      >
        {title && (
          <div className="header">
            <h4>{title}</h4>
            <div className="header__close" onClick={hide}>
              <GrClose />
            </div>
          </div>
        )}
        <div className="cont">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
