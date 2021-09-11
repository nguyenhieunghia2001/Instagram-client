import React from "react";
import Avatar from "../../Components/common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import ControlPost from "../../Components/common/General/ControlPost";
import WriteComment from "../../Components/common/General/WriteComment";

const PostPage = () => {
  return (
    <div className="post">
      <div className="wrapper">
        <div className="left"></div>
        <div className="right">
          <div className="header divider">
            <Avatar img={AvatarImg} size={32} />
            <p className="name">tinee.00</p>
          </div>
          <div className="comment divider"></div>
          <div className="divider">
            <ControlPost />
          </div>
          <div className="divider">
            <WriteComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
