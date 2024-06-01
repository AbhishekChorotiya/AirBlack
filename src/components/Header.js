import React from "react";
import Background from "./Background";

const Header = () => {
  return (
    <div className="flex w-full h-fit flex-col items-center justify-center gap-3 p-8 overflow-hidden relative">
      <img alt="logo" src="AirBlackLogo.png" className="w-[70px] drop" />
      <span className="text-white drop text-[10px] leading-3 tracking-[2.2px]">
        PRESENTS
      </span>
      <Background />
    </div>
  );
};

export default Header;
