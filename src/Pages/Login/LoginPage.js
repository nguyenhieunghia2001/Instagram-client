import React from "react";
import logo from "../../assets/images/logo-name.png";
import InputPlaceholder from "../../Components/common/InputPlaholder/Input";
import PasswordPlaceholder from "../../Components/common/InputPlaholder/Password";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.scss";
import Footer from "../../Components/common/Layouts/Footer";

const LoginPage = () => {
  return (
    <>
      <div className="auth">
        <div className="wrapper wrapper-border">
          <div className="header">
            <img src={logo} alt="logo" />
          </div>
          <div className="form">
            <InputPlaceholder placeholder="Email, số điện thoại hoặc tên tài khoản" />
            <PasswordPlaceholder placeholder="Mật khẩu" />
            <div className="btn-box">
              <button className="btn btn-auth">Đăng nhập</button>
            </div>
          </div>
          <div className="divider-group">
            <div className="left"></div>
            <p>HOẶC</p>
            <div className="right"></div>
          </div>
          <div className="login-facebook">
            <Link to="">
              <AiFillFacebook className="icon" />
              <span>Đăng nhập bằng Facebook</span>
            </Link>
          </div>
          <div className="forget">
            <Link to="">Quên mật khẩu?</Link>
          </div>
        </div>
        <div className="redirect wrapper-border">
          <span>
            Bạn chưa có tài khoản ư?
            <Link to="/register">Đăng ký</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;
