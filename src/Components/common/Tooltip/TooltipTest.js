import React from "react";
import "./style.scss";

const Tooltip = ({ children, tag }) => {
  return (
    <div className="tooltip-custom">
      <div className="element-mouse">
        {tag}
      </div>
      <div className="tooltip__obj">{children}</div>
    </div>
  );
};

export default Tooltip;
