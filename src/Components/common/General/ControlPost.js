import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import './style.scss'

const ControlPost = () => {
  return (
    <div className="post__control">
      <div className="control">
        <div className="icon">
          <AiOutlineHeart />
        </div>
        <div className="icon">
          <RiMessage3Line />
        </div>
        <div className="icon">
          <IoPaperPlaneOutline />
        </div>
        <div className="icon bookmark">
          <BiBookmark />
        </div>
      </div>
      <p className="like">9 lượt thích</p>
      {/* <div className="content">
        <p className="friend-name">hanie.n2k</p>
        <span>V là hết thời học sinh :((</span>
      </div> */}
      <div className="time">
        <span>20 THÁNG 5 2020</span>
      </div>
    </div>
  );
};
export default ControlPost;
