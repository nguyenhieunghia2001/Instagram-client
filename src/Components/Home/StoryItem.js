import React from "react";
import AvatarImg from "../../assets/images/avatar.jpg";

const StoryItem = () => {
  return (
    <div className="story-item">
      <div className="avatar">
        <img src={AvatarImg} alt="avatar" />
      </div>
      <p className="name">vyvy26.04</p>
    </div>
  );
};

export default StoryItem;
