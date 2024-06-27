// BoxComponent.jsx

import React from 'react';

const BoxComponent = ({ text, btnText, number, btnBgClr, numberBgClr, numberClr }) => {
  return (
    <div className="flex items-center h-[123px] justify-between rounded-lg bg-white shadow-md border-2">
      <div className="flex flex-col justify-center text-center w-3/5">
        <div className="text-xl ">{text}</div>
        <button className={`${btnBgClr} text-white rounded-2xl font-bold mt-4 mx-10`} type="button">
          {btnText}
        </button>
      </div>
      <div className={`w-2/5 h-[123px] border-2 flex items-center py-1 text-4xl justify-center ${numberBgClr} ${numberClr} rounded-lg font-bold`}>
        {number}
      </div>
    </div>
  );
};

export default BoxComponent;
