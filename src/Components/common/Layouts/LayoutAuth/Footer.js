import React from "react";
import { Link } from "react-router-dom";
import AplleImg from "../../../../assets/images/download-apple.png";
import CHPlayImg from "../../../../assets/images/download-chplay.png";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-auth">
      <div className="download">
        <p>Tải ứng dụng.</p>
        <div className="img-group">
          <img src={AplleImg} alt="apple-store" />
          <img src={CHPlayImg} alt="chplay" />
        </div>
      </div>
      <div className="footer-menu">
        <ul>
          <li>
            <Link to="">Giới thiệu</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Việc làm</Link>
          </li>
          <li>
            <Link to="">Trợ giúp</Link>
          </li>
          <li>
            <Link to="">API</Link>
          </li>
          <li>
            <Link to="">Quyền riêng tư</Link>
          </li>
          <li>
            <Link to="">Điều khoản</Link>
          </li>
          <li>
            <Link to="">Tài khoản liên quan nhất</Link>
          </li>
          <li>
            <Link to="">Hashtag</Link>
          </li>
          <li>
            <Link to="">Vị trí</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>© 2021 Instagram from Facebook</p>
      </div>
    </div>
  );
};

export default Footer;
