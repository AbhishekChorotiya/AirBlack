import React from "react";
import Heading from "./Heading";

const Certificate = () => {
  return (
    <div className="bg-black pt-[30px] pb-0 flex-col gap-3.5 px-6 flex w-full">
      <Heading title={"Get Certified From India’s Biggest Beauty Platform"} />
      <img
        alt="certificate"
        src="/assets/certificate.png"
        className="w-full object-contain"
      />
    </div>
  );
};

export default Certificate;
