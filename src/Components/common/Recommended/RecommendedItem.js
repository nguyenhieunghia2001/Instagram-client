import React from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../../../assets/images/avatar.jpg";
import Avatar from "../Friend/Avatar";
import Tooltip from "../../../Components/common/Tooltip/Tooltip";
import "./style.scss";
import SortInfo from "../../Friend/SortInfo";

const RecommendedTyleListItem = ({ size = 32, button, tooltip = true }) => {
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
        <Avatar img={AvatarImg} alt="my avatar" size={size} />
      </Link>
      <div className="sortinfo">
        {tooltip ? (
          <Tooltip
            tag={
              <Link to="">
                <span className="friend-name">nghiadx2001</span>
              </Link>
            }
          >
            <SortInfo />
          </Tooltip>
        ) : (
          <span className="friend-name">nghiadx2001</span>
        )}
        <div>Có vyvy26.04 theo dõi</div>
      </div>
      {button.type === "text" ? btnText : btnButton}
    </div>
  );
};

export default RecommendedTyleListItem;
