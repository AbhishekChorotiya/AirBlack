import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex gap-5">
      <img alt="line" src="/headingLine.svg" className="w-11" />
      <span className="text-grayWhite text-2xl text-center font-rocaone">
        {title}
      </span>
      <img alt="line" src="/headingLine.svg" className="w-11 rotate-180" />
    </div>
  );
};

export default Heading;
