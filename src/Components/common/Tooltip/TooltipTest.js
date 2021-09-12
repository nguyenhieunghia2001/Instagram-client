import React from "react";
import "./style.scss";

const Tooltip = ({ children, tag }) => {
  const onMouseOverToolTip = (e) => {
    console.log(e.pageX, e.pageY, e);
  };
  return (
    <div className="tooltip-custom">
      <div className="element-mouse" onMouseOver={onMouseOverToolTip}>
        {tag}
      </div>
      <div className="tooltip__obj">{children}</div>
    </div>
  );
};

export default Tooltip;
