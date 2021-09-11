import React from "react";
import "./style.scss";

const Avatar = ({ img, alt = "avatar", size }) => {
  return (
    <div className="avatar">
      <img src={img} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Avatar;
