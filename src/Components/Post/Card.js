import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import AvatarImg from "../../assets/images/avatar.jpg";
import useShow from "../../hooks/useShow";
import Modal from "../../Components/common/Modal/Modal";
import OptionPost from "./OptionPost";
import Tooltip from "../../Components/common/Tooltip/Tooltip";
import SortInfo from "../Friend/SortInfo";
import Avatar from "../common/Friend/Avatar";
import Emoji from "../common/InputPlaholder/Emoji";
import "./style.scss";

const CardItem = () => {
  const { isShowing: isShowModalOption, toggle: toggleOption } = useShow();
  const [cmtText, setCmtText] = useState("");

  const onChangeCmt = (e) => {
    setCmtText(e.target.value);
  };

  return (
    <>
      <div className="card-item">
        <div className="header">
          <div className="avatar-circle">
            <Avatar img={AvatarImg} alt="avatar" size={30} />
          </div>
          <Tooltip tag={<p className="friend-name">hanie.n2k</p>}>
            <SortInfo />
          </Tooltip>

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
            <Emoji setValue={setCmtText} />
          </div>
          <input
            placeholder="Thêm bình luận..."
            value={cmtText}
            onChange={onChangeCmt}
          />
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
