import React from "react";

const OptionPost = () => {
  return (
    <div className="post-option">
      <ul>
        <li>
          <div className="post-option--item">
            <p className="highlight">Báo cáo</p>
          </div>
        </li>
        <li>
          <div className="post-option--item">
            <p className="highlight">Bỏ theo dõi</p>
          </div>
        </li>
        <li>
          <div className="post-option--item">
            <p>Đi tới bài viết</p>
          </div>
        </li>
        <li>
          <div className="post-option--item">
            <p>Hủy</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OptionPost;
