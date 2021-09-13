import { BiUserPin } from "react-icons/bi";
import React from "react";
import "./style.scss";

const Tagged = () => {
  return (
    <div className="account__tagged">
      <div className="empty">
        <BiUserPin />
        <p>Ảnh có mặt bạn</p>
        <span>
          Khi mọi người gắn thẻ bạn trong ảnh, ảnh sẽ xuất hiện tại đây.
        </span>
      </div>
    </div>
  );
};

export default Tagged;
