import React from "react";
import boxFrame from "../assets/images/box-border-gold/box-border-gold.png";

const GoldBox = ({ children, className = "w-[60vw] h-[80vh]" }) => {
  return (
    <div
      className={`relative box-border border-[22px] ${className}`}
      style={{
        borderImageSource: `url(${boxFrame})`,
        borderImageSlice: "32 fill",
        borderImageRepeat: "stretch",
        borderImageOutset: 0,
        borderImageWidth: "22px",
        backgroundColor: "#d4aa6f", // centro da box (opcional)
      }}
    >
      <div className="relative z-10 p-4 text-madeira font-classic">
        {children}
      </div>
    </div>
  );
};

export default GoldBox;