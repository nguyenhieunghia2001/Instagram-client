import React from "react";
import Avatar from "../common/Friend/Avatar";
import AvatarImg from "../../assets/images/avatar.jpg";
import { IoCameraOutline } from "react-icons/io5";
import "./style.scss";

const SortInfo = () => {
  return (
    <div className="info__sort">
      <div className="basic">
        <Avatar img={AvatarImg} alt="avatar friend" size={56} />
        <div className="basic__right">
          <p className="nickname">hanie.n2k</p>
          <p className="name">N e e</p>
          <span className="follow">có hoang.trii theo dõi</span>
        </div>
      </div>
      <div className="statistical">
        <div className="collumn">
          <p>39</p>
          <span>Bài viết</span>
        </div>
        <div className="collumn">
          <p>117</p>
          <span>Người theo dõi</span>
        </div>
        <div className="collumn">
          <span>Đang theo dõi</span>
          <p>302</p>
          <span>người dùng</span>
        </div>
      </div>
      <div className="posted">
        <div className="empty">
          <div className="camera">
            <IoCameraOutline />
          </div>
          <p>Chưa có bài viết nào</p>
          <span>
            Khi nguyenleminh439 đăng bài, bạn sẽ nhìn thấy ảnh và video của họ
            tại đây.
          </span>
        </div>
      </div>
      <div className="control">
        <button className="btn">Nhắn tin</button>
        <button className="btn">Theo dõi</button>
      </div>
    </div>
  );
};

export default SortInfo;
