import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Card = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="avatar">
          <img src={AvatarImg} alt="avatar" />
        </div>
        <p className="friend-name">hanie.n2k</p>
        <div className="icon">
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="images"></div>
      <div className="cont">
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
          <div className="icon">
            <BiBookmark />
          </div>
        </div>
        <p className="like">9 lượt thích</p>
        <div className="content">
          <p>damchuanh</p>
          <span>V là hết thời học sinh :((</span>
        </div>
        <div className="time">
          <span>20 THÁNG 5 2020</span>
        </div>
      </div>
      <div className="comment">
        <div className="icon">
          <HiOutlineEmojiHappy />
        </div>
        <input placeholder="Thêm bình luận..." />
        <button className="btn">Đăng</button>
      </div>
    </div>
  );
};

export default Card;
