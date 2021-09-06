import React, { useState } from "react";
import "./style.scss";

const PasswordPlaceholder = ({ placeholder }) => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={`input-box ${text ? "input-box--focus" : ""}`}>
      <input onChange={onChangeInput} type={status ? "text" : "password"} />
      <span className="input-placeholder">{placeholder}</span>
      {text && (
        <span className="status" onClick={() => setStatus(!status)}>
          {status ? "Ẩn" : "Hiển thị"}
        </span>
      )}
    </div>
  );
};
export default PasswordPlaceholder;
