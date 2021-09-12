import React from "react";
import Avatar from "../../Components/common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import Tooltip from "../../Components/common/Tooltip/Tooltip";
import SortInfo from "../../Components/Friend/SortInfo";
import "./style.scss";

const CommentItem = () => {
  return (
    <div className="comment__item">
      <Avatar img={AvatarImg} size={32} />

      <div className="content">
        <Tooltip tag={<p className="name">tinee.00</p>}>
          <SortInfo />
        </Tooltip>
        <span className="comment-text">Cố lên.... loading 70% ờoading 70% ờoading 70% ời 😘😘😘</span>
        <span className="time">1 ngày</span>
      </div>
    </div>
  );
};
export default CommentItem;
