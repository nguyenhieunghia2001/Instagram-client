import { useState } from "react";

const useShow = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return {
    isShowing,
    toggle,
  };
};

export default useShow;
