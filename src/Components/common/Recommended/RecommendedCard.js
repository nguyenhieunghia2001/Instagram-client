import React from "react";
import { Link } from "react-router-dom";
import Slide from "../Slide/Slide";
import RecommendedCardItem from "./RecommendedCardItem";

const RecommendedCart = () => {
  return (
    <div className="recommended__tyleCard-list">
      <div className="header">
        <p>Gợi ý dành cho bạn</p>
        <Link to=""> Xem tất cả</Link>
      </div>
      <Slide
        component={RecommendedCardItem}
        slidesToScroll={2}
        slidesToShow={3}
        arrow={{ left: "0", right: "95%" }}
      />
    </div>
  );
};

export default RecommendedCart;
