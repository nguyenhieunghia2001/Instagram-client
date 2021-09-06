import React from "react";
import logo from "../../assets/images/logo-name.png";
import InputPlaceholder from "../../Components/common/InputPlaholder/Input";
import PasswordPlaceholder from "../../Components/common/InputPlaholder/Password";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Login/style.scss";
import Footer from "../../Components/common/Layouts/LayoutAuth/Footer";

const RegisterPage = () => {
  return (
    <>
      <div className="auth">
        <div className="wrapper wrapper-border">
          <div className="header">
            <img src={logo} alt="logo" />
          </div>
          <div className="cont">
            <p>Đăng ký để xem ảnh và video từ bạn bè.</p>
          </div>
          <div className="login-facebook">
            <Link to="">
              <AiFillFacebook className="icon" />
              <span>Đăng nhập bằng Facebook</span>
            </Link>
          </div>
          <div className="divider-group">
            <div className="left"></div>
            <p>HOẶC</p>
            <div className="right"></div>
          </div>
          <div className="form">
            <InputPlaceholder placeholder="Số điện thoại" />
            <InputPlaceholder placeholder="Tên đầy đủ" />
            <InputPlaceholder placeholder="Tên người dùng" />
            <PasswordPlaceholder placeholder="Mật khẩu" />
            <div className="btn-box">
              <button className="btn btn-auth">Đăng ký</button>
            </div>
          </div>
          <div className="rule">
            <p>
              Bằng cách đăng ký, bạn đồng ý với
              <strong>
                Điều khoản, Chính sách dữ liệu và Chính sách cookie
              </strong>
              của chúng tôi.
            </p>
          </div>
        </div>
        <div className="redirect wrapper-border">
          <span>
            Bạn đã có tài khoản?
            <Link to="/login">Đăng nhập</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RegisterPage;
