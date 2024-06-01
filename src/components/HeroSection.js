import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white flex flex-col gap-2 bg-black p-6 pt-5 pb-[30px] font-proxima">
      <h1 className="text-2xl leading-[30px] font-rocaone">
        Professional Online <br /> Makeup Course
      </h1>
      <div className="text-xs flex gap-3">
        <div className="gap-1 flex items-center text-[#FAFAFA] bg-[#FFFFFF24] py-2 px-3 rounded-[5px]">
          <img alt="badge" src="/badge.svg" />
          Certification Programme
        </div>
        <div className="gap-1 flex items-center text-[#F7C852]">
          <img alt="star" src="/star.svg" />
          Rated 4.85/5
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <BulletPoint title={"India’s No.1 Online Makeup Course"} />
        <BulletPoint title={"Learn by LIVE Do-it-Together Classes"} />
        <BulletPoint title={"Unlimited Practise Session to master skills"} />
      </div>
      <Form title={"Fill the form below to enquire"} />
    </div>
  );
};

export default HeroSection;

const BulletPoint = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <img alt="tick" src="/tick.svg" width={10} />
      <p className="text-sm leading-4 text-lightGray">{title}</p>
    </div>
  );
};

const Form = ({ title }) => {
  return (
    <div className="w-full bg-white rounded-[10px] mt-4 overflow-hidden">
      <div className="w-full h-full  text-white py-2.5 flex justify-center font-[700] bg-[#E84D84] text-xs">
        {title.toUpperCase()}
      </div>
      <div className="p-2.5 gap-4 flex flex-col">
        <InputLabel title={"*Enter your name"}>
          <div className="border border-[#D9D9D9] px-3 py-2 rounded-[4px]">
            <input
              type="text"
              placeholder="Eg. Aneesha Mehra"
              className="outline-none text-sm"
            />
          </div>
        </InputLabel>
        <InputLabel title={"*Enter your WhatsApp Number"}>
          <div className="border border-[#D9D9D9] px-3 py-2 rounded-[4px]">
            <input
              type="text"
              placeholder="Eg. Aneesha Mehra"
              className="outline-none text-sm"
            />
          </div>
        </InputLabel>
        <Dropdown title={"*Select your profession"} />
        <Dropdown title={"*Select your goal"} />
        <Dropdown title={"*Select your city"} />
        <button className="bg-buttonBg p-2.5 rounded-[4px] font-[700]">
          Submit
        </button>
      </div>
    </div>
  );
};

const InputLabel = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-[11px] text-[#505050]">
      <span className="text-sm font-semibold">{title}</span>
      {children}
    </div>
  );
};

const Dropdown = ({ title, children }) => {
  return (
    <InputLabel title={title}>
      <div className="border border-[#D9D9D9] px-3 py-2 rounded-[4px]">
        <input
          type="text"
          placeholder="Eg. Aneesha Mehra"
          className="outline-none text-sm"
        />
      </div>
    </InputLabel>
  );
};
