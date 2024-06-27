import React from 'react';
import BoxComponent from './BoxComponent';

function Main() {
  return (
    <>
    <div className='mr-8'>
{/* HEADING */}


      <div className="text-2xl font-bold ml-8 mt-8">
        <h1>Hello Ravi!</h1>
      </div>

 {/* 4 boxes */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ml-8">
        {/* First Row */}
        <div className="col-span-1">
          <BoxComponent
            text="Applied Jobs"
            btnText="View"
            number="2"
            btnBgClr="bg-green-600"
            numberBgClr="bg-green-600"
            numberClr="text-white"
          />
        </div>
        <div className="col-span-1">
          <BoxComponent
            text="Selected Jobs"
            btnText="View"
            number="1"
            btnBgClr="bg-green-600"
            numberBgClr="bg-white"
            numberClr="text-green-600"
          />
         </div>
        {/* Second Row */}
       
        <div className="col-span-1">
          <BoxComponent
            text="Jobs for you!"
            btnText="Explore"
            number="125"
            btnBgClr="bg-blue-400"
            numberBgClr="bg-blue-400"
            numberClr="text-white"
          />
        
        </div>
        <div className='col-span-1'>
        <div className="bg-gray-200 border border-2 rounded-lg h-[123px] text-center pt-2">
          <div className="text-md text-gray-600 mb-2">Do these skills to get eligibility in
         </div>
          <div className="font-bold text-lg text-gray-800 mb-2"> 108 companies</div>
          <div className="flex justify-center gap-6">
            <button className="bg-white rounded-xl px-2">Java</button>
            <button className="bg-white rounded-xl px-2">Python</button>
            <button className="bg-white rounded-xl px-2">Sql</button>
            <button className="bg-white rounded-xl px-2">Figma</button>
          </div>
          </div>
        </div>
      </div>

{/* last box */}
    
<div className="bg-white h-[150px] border border-gray-300 p-4 rounded-lg shadow-md flex items-center justify-center gap-2 mt-8 ml-8">
      <div className="text-gray-800 text-lg ">6 AI testing pending - Finish to get more eligibility</div>
      <button className="bg-orange-400 text-white py-1 px-3 rounded-lg ">
        Finish now
      </button>
</div>

</div>
    </>
  );
}

export default Main;
