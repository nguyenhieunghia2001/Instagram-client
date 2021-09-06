import React from "react";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import AvatarImg from "../../../assets/images/avatar.jpg";
import LogoImg from "../../../assets/images/logo-name.png";
import "./style.scss";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
