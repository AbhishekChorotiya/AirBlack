import React, { useEffect, useRef, useState } from "react";
import {
  CITIES_OPTIONS,
  COUNTRIES_DIAL_CODES,
  GOAL_OPTIONS,
  PROFESSION_OPTIONS,
} from "../utils/constants/constants";

const HeroSection = () => {
  return (
    <div className="text-white flex flex-col gap-2 bg-black p-6 pt-5 pb-[30px] font-proxima">
      <h1 className="drop delay-200 text-2xl leading-[30px] font-rocaone">
        Professional Online <br /> Makeup Course
      </h1>
      <div className="text-xs flex gap-3 drop delay-300">
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
        <BulletPoint index={1} title={"India’s No.1 Online Makeup Course"} />
        <BulletPoint index={2} title={"Learn by LIVE Do-it-Together Classes"} />
        <BulletPoint
          index={3}
          title={"Unlimited Practise Session to master skills"}
        />
      </div>
      <Form title={"Fill the form below to enquire"} />
    </div>
  );
};

export default HeroSection;

const BulletPoint = ({ title, index = 1 }) => {
  return (
    <div className="flex items-center gap-2 drop">
      <img alt="tick" src="/tick.svg" width={10} />
      <p className="text-sm leading-4 text-lightGray">{title}</p>
    </div>
  );
};

const Form = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    profession: "",
    goal: "",
  });
  return (
    <div className="w-full bg-white z-10 rounded-[10px] mt-4 font-pingfang drop">
      <div className="w-full h-full  text-white py-2.5 font-proxima flex rounded-t-[10px] justify-center font-[700] bg-[#E84D84] text-xs">
        {title.toUpperCase()}
      </div>
      <div className="p-2.5 gap-4 flex flex-col">
        <InputLabel title={"*Enter your name"}>
          <div className="border border-[#D9D9D9] flex px-3 py-2 rounded-[4px]">
            <input
              type="text"
              placeholder="Eg. Aneesha Mehra"
              value={formData.name}
              onChange={(e) => {
                if (e.target.value.length > 30) {
                  return;
                }
                setFormData({ ...formData, name: e.target.value });
              }}
              className="outline-none text-sm placeholder-[#BFBFBF] w-full"
            />
          </div>
        </InputLabel>
        <InputLabel title={"*Enter your WhatsApp Number"}>
          <div className="flex w-full gap-2">
            <div className="w-16">
              <Dropdown options={COUNTRIES_DIAL_CODES} placeholder="+91" />
            </div>
            <div className="border border-[#D9D9D9] flex px-3 py-2 flex-1 rounded-[4px]">
              <input
                type="number"
                value={formData.phoneNumber}
                onChange={(e) => {
                  if (e.target.value.length > 10) {
                    return;
                  }
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value,
                  });
                }}
                placeholder="Eg. 0000000000"
                className="outline-none text-sm placeholder-[#BFBFBF] w-full"
              />
            </div>
          </div>
        </InputLabel>
        <DropdownInput
          title={"*Select your profession"}
          options={PROFESSION_OPTIONS}
        />
        <DropdownInput title={"*Select your goal"} options={GOAL_OPTIONS} />
        <DropdownInput title={"*Select your city"} options={CITIES_OPTIONS} />
        <button className="bg-buttonBg font-proxima p-2.5 rounded-[4px] font-[700]">
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

const DropdownInput = ({ title, options }) => {
  return (
    <InputLabel title={title}>
      <Dropdown options={options} />
    </InputLabel>
  );
};

const Dropdown = ({
  options,
  placeholder = "Choose the most relevant option",
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const divRef = useRef(null);
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
      return;
    }
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      setOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="border border-[#D9D9D9] px-3 py-2.5 rounded-[4px] relative">
      <div className="flex items-center z-0 justify-between" ref={dropdownRef}>
        <span
          className={`${selected ? "text-black" : "text-[#BFBFBF]"} text-sm`}
        >
          {selected ? selected : placeholder}
        </span>
        <img alt="down" src="/down.svg" width={12} />
      </div>
      {open && (
        <div
          ref={divRef}
          className="w-full left-0 z-[1000] rounded-[10px] border border-[#D9D9D9] bg-white absolute top-[calc(100%+5px)] flex flex-col"
        >
          {options.map((option) => (
            <div
              className="flex items-center p-4 justify-between"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              <span className="text-black text-sm">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
