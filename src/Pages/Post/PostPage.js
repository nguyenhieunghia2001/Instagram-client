import React from "react";
import Avatar from "../../Components/common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import ControlPost from "../../Components/common/General/ControlPost";
import WriteComment from "../../Components/common/General/WriteComment";
import Tooltip from "../../Components/common/Tooltip/Tooltip";
import SortInfo from "../../Components/Friend/SortInfo";
import CommentItem from "../../Components/Post/CommentItem";
import useShow from "../../hooks/useShow";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from "../../Components/common/Modal/Modal";
import "./style.scss";
import OptionPost from "../../Components/Post/OptionPost";

const PostPage = () => {
  const { isShowing: isShowModalOption, toggle: toggleOption } = useShow();
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
          <div className="icon" onClick={toggleOption}>
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <div className="comment divider">
          <div className="comment__list">
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
        </div>
        <div className="control divider">
          <ControlPost />
        </div>
        <div className="write divider" style={{ padding: "0 16px" }}>
          <WriteComment />
        </div>
      </div>
      {isShowModalOption && (
        <Modal isShowing={isShowModalOption} hide={toggleOption}>
          <OptionPost />
        </Modal>
      )}
    </div>
  );
};

export default PostPage;
