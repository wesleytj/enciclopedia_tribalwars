import React from "react";
import "../css/ButtonRed.css";

const ButtonRed = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="button-red w-56 h-[38px] m-auto relative flex items-center justify-center 
      font-bold text-sm cursor-pointer"
      style={{
        backgroundImage: `url("/images/button-red/middle.webp")`,
        backgroundRepeat: "repeat-x"
      }}
    >
      <span className="z-10 relative font-content text-beigeLight">{children}</span>
    </div>
  );
};

export default ButtonRed;
