import React from "react";
import Slider from "react-slick";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import "./style.scss";

function SampleNextArrow(props) {
  const { className, style, onClick, location } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: location }}
      onClick={onClick}
    >
      <div className="icon">
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, location } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: location, zIndex: 1 }}
      onClick={onClick}
    >
      <div className="icon">
        <IoIosArrowDropleftCircle />
      </div>
    </div>
  );
}

const Slide = ({
  component: Component,
  slidesToScroll,
  slidesToShow,
  arrow,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    nextArrow: <SampleNextArrow location={arrow.right} />,
    prevArrow: <SamplePrevArrow location={arrow.left} />,
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Component />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
