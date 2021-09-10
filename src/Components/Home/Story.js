import React from "react";
import Slide from "../common/Slide/Slide";
import StoryItem from "./StoryItem";
import "./style.scss";

const Story = () => {
  return (
    <div className="story">
      <Slide
        component={StoryItem}
        slidesToScroll={4}
        slidesToShow={7}
        arrow={{ left: "-33px", right: "101%" }}
      />
    </div>
  );
};

export default Story;
