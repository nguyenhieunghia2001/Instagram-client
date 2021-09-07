import React from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../../../assets/images/avatar.jpg";
import "./style.scss";

const RecommendedTyleListItem = ({ size = 32, button }) => {
  const btnText = (
    <button className="btn btn-changeaccount btn-changeaccount--text">Chuyển</button>
  );
  const btnButton = (
    <button className="btn btn-changeaccount btn-changeaccount--button">Chuyển</button>
  );
  return (
    <div className="recommended__tyleList">
      <Link to="" className="img-box">
        <img src={AvatarImg} alt="my avatar" width={size} height={size} />
      </Link>
      <div className="sortinfo">
        <Link to="" className="sortinfo__name">
        nghiadx2001
        </Link>
        <div>Nguyễn Hiếu nghĩa</div>
      </div>
      {button.tyle === "text" ? btnText : btnButton}
    </div>
  );
};

export default RecommendedTyleListItem;
