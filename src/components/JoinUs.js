import React from "react";
import Background from "./Background";
import Heading from "./Heading";

const JoinUs = () => {
  const info = [
    {
      icon: "/camera.svg",
      title: "Do-it-together, live on zoom",
    },
    {
      icon: "/starBadge.svg",
      title: "4.8 /5 Rated Classes",
    },
    {
      icon: "/community.svg",
      title: "35000+ Members",
    },
  ];
  return (
    <div className="flex w-full h-fit flex-col items-center justify-center gap-8 py-[30px] px-6 overflow-hidden relative">
      <Heading title={"Why Should You Join Airblack?"} />
      <div className="w-full flex gap-3 justify-between">
        {info.map(({ icon, title }) => (
          <IconAndTitle key={title} icon={icon} title={title} />
        ))}
      </div>
      <button className="bg-buttonBg font-proxima text-white w-full p-2.5 rounded-[4px] font-[700]">
        Apply Now
      </button>
      <Background center={true} />
    </div>
  );
};

export default JoinUs;

const IconAndTitle = ({ icon, title }) => {
  return (
    <div className="text-white flex-1 text-center font-proxima flex flex-col text-sm items-center gap-2">
      <img alt="bg" src={icon} width={34} />
      <span>{title}</span>
    </div>
  );
};
