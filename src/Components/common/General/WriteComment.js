import React, { useState } from "react";
import Emoji from "../InputPlaholder/Emoji";
import "./style.scss";

const WriteComment = () => {
  const [cmtText, setCmtText] = useState("");

  const onChangeCmt = (e) => {
    setCmtText(e.target.value);
  };
  return (
    <div className="writecomment">
      <div className="icon">
        <Emoji setValue={setCmtText} />
      </div>
      <input
        placeholder="Thêm bình luận..."
        value={cmtText}
        onChange={onChangeCmt}
      />
      <button className="btn">Đăng</button>
    </div>
  );
};
export default WriteComment;
