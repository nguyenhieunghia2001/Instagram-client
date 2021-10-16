import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Avatar from "../../Components/common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import { Col, Container, Row } from "reactstrap";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGrid3X3 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { RiSlideshow3Line, RiBookmarkLine } from "react-icons/ri";
import "./style.scss";
import Tagged from "../../Components/Account/Tagged";
import Posted from "../../Components/Account/Posted";
import Saved from "../../Components/Account/Saved";

const AccountPage = () => {
  return (
    <section className="account">
      <div className="top">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="account__avatar">
                <Avatar img={AvatarImg} size={150} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="account__info">
                <div className="account__info-row">
                  <h2 className="account-nickname">nghiadx2001</h2>
                  <button className="btn btn-account">
                    Chỉnh sửa trang cá nhân
                  </button>
                  <div className="account-setting">
                    <IoSettingsOutline />
                  </div>
                </div>
                <div className="account__info-row">
                  <div className="account-statistical">
                    <span>
                      <span className="bold">0</span> bài viết
                    </span>
                  </div>
                  <div className="account-statistical">
                    <span>
                      <span className="bold">1</span> người theo dõi
                    </span>
                  </div>
                  <div className="account-statistical">
                    <span className="bold">
                      Đang theo dõi <span>11</span> người theo dõi
                    </span>
                  </div>
                </div>
                <div className="account__info-row">
                  <p className="account-name">Nguyễn Hiếu Nghĩa</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="account__tab">
        <ul className="tab__list">
          <li>
            <NavLink
              to="/account/post"
              activeClassName="active"
              className="item"
            >
              <BsGrid3X3 />
              <p>BÀI VIẾT</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/chanle"
              activeClassName="active"
              className="item"
            >
              <RiSlideshow3Line />
              <p>IGTV</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/saved"
              activeClassName="active"
              className="item"
            >
              <RiBookmarkLine />
              <p>ĐÃ LƯU</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/tagged"
              activeClassName="active"
              className="item"
            >
              <BiUserPin />
              <p>ĐƯỢC GẮN THẺ</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/account/post" exact>
          <Posted />
        </Route>
        <Route path="/account/saved" exact>
          <Saved />
        </Route>
        <Route path="/account/tagged" exact>
          <Tagged />
        </Route>
      </Switch>
    </section>
  );
};

export default AccountPage;
