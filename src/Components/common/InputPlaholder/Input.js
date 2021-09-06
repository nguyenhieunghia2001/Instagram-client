import React, { useState } from "react";
import "./style.scss";

const InputPlaceholder = ({ placeholder }) => {
  const [text, setText] = useState("");
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={`input-box ${text ? "input-box--focus" : ""}`}>
      <input onChange={onChangeInput} />
      <span className="input-placeholder">{placeholder}</span>
    </div>
  );
};
export default InputPlaceholder;
