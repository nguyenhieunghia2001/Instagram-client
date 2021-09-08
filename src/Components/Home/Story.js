import React from "react";
import AvatarImg from "../../assets/images/avatar.jpg";
import "./style.scss";

const Story = () => {
  return (
    <div className="story">
      <div className="story-item">
        <div className="avatar">
          <img src={AvatarImg} alt="avatar" />
        </div>
        <p className="name">vyvy26.04</p>
      </div>
    </div>
  );
};

export default Story;
