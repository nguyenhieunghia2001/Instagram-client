import React from "react";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import AvatarImg from "../../../assets/images/avatar.jpg";
import LogoImg from "../../../assets/images/logo-name.png";
import useShow from "../../../hooks/useShow";
import Modal from "../../../Components/common/Modal/Modal";
import "./style.scss";
import CreatePost from "../../Post/CreatePost";

const Navbar = () => {
  const { isShowing: isShowModalOption, toggle: toggleOption } = useShow();
  return (
    <div className="navbar ">
      <Container>
        <div className="logo">
          <Link to="/">
            <img src={LogoImg} alt="logo instagram" />
          </Link>
        </div>
        <div className="search-box"></div>
        <div className="navbar-menu">
          <ul>
            <li>
              <div className="icon">
                <AiOutlineHome />
              </div>
            </li>
            <li>
              <div className="icon">
                <RiMessengerLine />
              </div>
            </li>
            <li>
              <div className="icon" onClick={toggleOption}>
                <CgAddR />
              </div>
            </li>
            <li>
              <div className="icon">
                <AiOutlineHeart />
              </div>
            </li>
            <li>
              <div className="avatar">
                <img src={AvatarImg} alt="avatar" />
              </div>
            </li>
          </ul>
        </div>
      </Container>
      {isShowModalOption && (
        <Modal
          isShowing={isShowModalOption}
          hide={toggleOption}
          width="100%"
          height="calc(100vh - 80px)"
          title="Bài viết mới"
        >
          <CreatePost />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
