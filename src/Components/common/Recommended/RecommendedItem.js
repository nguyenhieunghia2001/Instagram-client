import React from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../../../assets/images/avatar.jpg";
import "./style.scss";

const RecommendedTyleListItem = ({ size = 32, button }) => {
  const btnText = (
    <button className="btn btn-changeaccount btn-changeaccount--text">
      {button.text}
    </button>
  );
  const btnButton = (
    <button className="btn btn-changeaccount btn-changeaccount--button">
      {button.text}
    </button>
  );

  return (
    <div className="recommended__tyleList">
      <Link to="" className="img-box">
        <img src={AvatarImg} alt="my avatar" width={size} height={size} />
      </Link>
      <div className="sortinfo">
        <Link to="">
          <span className="friend-name">nghiadx2001</span>
        </Link>
        <div>Nguyễn Hiếu nghĩa</div>
      </div>
      {button.type === "text" ? btnText : btnButton}
    </div>
  );
};

export default RecommendedTyleListItem;
