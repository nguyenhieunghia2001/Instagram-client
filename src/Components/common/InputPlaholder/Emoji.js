import React from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import useShow from "../../../hooks/useShow";

const Emoji = ({ setValue }) => {
  const { isShowing, toggle } = useShow();

  const onEmojiClick = (_, emojiObject) => {
    setValue((pre) => pre + emojiObject?.emoji);
  };

  return (
    <div className="picker-emoji">
      <div className="button" onClick={toggle}>
        <HiOutlineEmojiHappy />
      </div>
      {isShowing && (
        <div className="emoji-table">
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
          />
        </div>
      )}
    </div>
  );
};

export default Emoji;
