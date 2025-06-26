import React from "react";
import logo from "../assets/images/logo.png"; // ajuste o caminho se necessário

const Logo = ({ className = "w-64 absolute top-10 left-10", alt = "Logotipo Tribal Wars" }) => {
  return (
    <div className={className}>
      <img src={logo} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default Logo;