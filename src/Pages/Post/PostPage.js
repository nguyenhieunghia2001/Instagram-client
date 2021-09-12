import React from "react";
import Avatar from "../../Components/common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import ControlPost from "../../Components/common/General/ControlPost";
import WriteComment from "../../Components/common/General/WriteComment";
import Tooltip from '../../Components/common/Tooltip/Tooltip'
import "./style.scss";
import SortInfo from "../../Components/Friend/SortInfo";
import CommentItem from "../../Components/Post/CommentItem";

const PostPage = () => {
  return (
    <div className="post">
      <div className="left">
        <img src={AvatarImg} alt="img post" />
      </div>
      <div className="right">
        <div className="header divider">
          <Avatar img={AvatarImg} size={32} />

          <Tooltip tag={<p className="name">tinee.00</p>}>
            <SortInfo />
          </Tooltip>
        </div>
        <div className="comment divider">
          <CommentItem />
          <CommentItem />
        </div>
        <div className="control divider">
          <ControlPost />
        </div>
        <div className="write divider" style={{ padding: "0 16px" }}>
          <WriteComment />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
