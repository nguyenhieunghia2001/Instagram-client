import React from "react";
import CardItem from "../../Components/Post/Card";

import "./style.scss";
import RecommendedTyleListItem from "../../Components/common/Recommended/RecommendedItem";
import { Link } from "react-router-dom";
import RecommendedListTyleList from "../../Components/Home/RecommendedList";
import Story from "../../Components/Home/Story";
import RecommendedCart from "../../Components/common/Recommended/RecommendedCard";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <Story />
        <CardItem />
        <RecommendedCart />
      </div>
      <div className="right">
        <div className="myaccount">
          <RecommendedTyleListItem
            size={56}
            button={{ text: "Chuyển", type: "text" }}
          />
        </div>
        <div className="recommended">
          <div className="header">
            <p>Gợi ý cho bạn</p>
            <Link to="">Xem tất cả</Link>
          </div>
          <RecommendedListTyleList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
