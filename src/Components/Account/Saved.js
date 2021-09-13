import React from "react";
import { RiBookmarkLine } from "react-icons/ri";
import "./style.scss";

const Saved = () => {
  return (
    <div className="account__saved">
      <div className="empty">
        <RiBookmarkLine />
        <p>Lưu</p>
        <span>
          Lưu ảnh và video mà bạn muốn xem lại. Sẽ không có ai được thông báo và
          chỉ mình bạn có thể xem nội dung mình đã lưu.
        </span>
      </div>
    </div>
  );
};

export default Saved;
