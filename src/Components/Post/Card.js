import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import AvatarImg from "../../assets/images/avatar.jpg";
import useShow from "../../hooks/useShow";
import Modal from "../../Components/common/Modal/Modal";

import "./style.scss";
import OptionPost from "./OptionPost";

const CardItem = () => {
  const { isShowing: isShowModalOption, toggle: toggleOption } = useShow();

  return (
    <>
      <div className="card-item">
        <div className="header">
          <div className="avatar">
            <img src={AvatarImg} alt="avatar" />
          </div>
          <p className="friend-name">hanie.n2k</p>
          <div className="icon" onClick={toggleOption}>
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <div className="images">
          <img src={AvatarImg} alt="avatar" />
        </div>
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
            <div className="icon bookmark">
              <BiBookmark />
            </div>
          </div>
          <p className="like">9 lượt thích</p>
          <div className="content">
            <p className="friend-name">hanie.n2k</p>
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
      {isShowModalOption && (
        <Modal isShowing={isShowModalOption} hide={toggleOption}>
          <OptionPost />
        </Modal>
      )}
    </>
  );
};

export default CardItem;
