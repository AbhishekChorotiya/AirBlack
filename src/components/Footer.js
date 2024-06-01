import React from "react";
import Background from "./Background";

const Footer = () => {
  return (
    <div className="flex w-full h-fit flex-col gap-6 items-center justify-center py-14 px-10 overflow-hidden relative">
      <h1 className="text-grayWhite text-2xl w-52 text-center font-rocaone drop">
        Join our growing community of 35,000
        <span className="text-grayWhite text-2xl text-center font-proxima">
          +{" "}
        </span>
        alumni
      </h1>
      <button className="bg-buttonBg drop p-2.5 w-full text-white font-proxima rounded-[4px] font-[700]">
        Apply Now
      </button>
      <div className="flex gap-[17.35px] mt-1 drop">
        <img src={"/assets/instagram.svg"} width={35} alt="instagram" />
        <img src="/facebook.svg" width={35} alt="facebook" />
        <img src="/linkedin.svg" width={35} alt="linkedin" />
        <img src="/twitter.svg" width={35} alt="twitter" />
      </div>
      <Background center={true} />
    </div>
  );
};

export default Footer;
