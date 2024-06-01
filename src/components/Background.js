import React from "react";

const Background = ({ center = false }) => {
  return (
    <div
      className={`w-full h-full absolute z-[-1]  left-0 ${center && "-top-9"}`}
    >
      <div
        className={`absolute w-full h-full bg-black/80 ${center && "top-9"}`}
      />

      <div className="flex overflow-hidden justify-center">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            alt={`bgImage-${i + 1}`}
            src={`/assets/a${i + 1}.png`}
            className="h-[125px]"
          />
        ))}
      </div>
      <div className="flex overflow-hidden justify-center">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            alt={`bgImage-${i + 5}`}
            src={`/assets/a${i + 5}.png`}
            className="h-[125px]"
          />
        ))}
      </div>
      <div className="flex overflow-hidden justify-center">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            alt={`bgImage-${i + 9}`}
            src={`/assets/a${i + 9}.png`}
            className="h-[125px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
