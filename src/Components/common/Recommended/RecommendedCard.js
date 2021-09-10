import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RecommendedCardItem from "./RecommendedCardItem";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "95%" }}
      onClick={onClick}
    >
      <div className="icon">
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "0", zIndex: 1 }}
      onClick={onClick}
    >
      <div className="icon">
        <IoIosArrowDropleftCircle />
      </div>
    </div>
  );
}
const RecommendedCart = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="recommended__tyleCard-list">
      <div className="header">
        <p>Gợi ý dành cho bạn</p>
        <Link to=""> Xem tất cả</Link>
      </div>
      <Slider {...settings}>
        <div>
          <RecommendedCardItem />
        </div>
        <div>
          <RecommendedCardItem />
        </div>
        <div>
          <RecommendedCardItem />
        </div>
        <div>
          <RecommendedCardItem />
        </div>
        <div>
          <RecommendedCardItem />
        </div>
      </Slider>
    </div>
  );
};

export default RecommendedCart;
