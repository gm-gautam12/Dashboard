import React from "react";
import down from "../assets/downarrow.png";
import Chart1 from "./Chart1";

const Chart = () => {
  return (
    <div className="px-10 py-5 bg-white h-[fit] shadow-xl border-1 border-slate-200 rounded-2xl text-black">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <h2 className="text-[18px] font-bold">Activities</h2>
            <p className="flex items-center gap-2 text-[14px] text-[#858585]">
              May-June 2021
              <img src={down} className="w-[8px] h-[5px]" alt="down" />
            </p>
          </div>

          <div className="flex justify-between items-center gap-4 md:gap-8">
            <div className="flex justify-between items-center gap-2 ">
              <div className="rounded-full bg-[#E9A0A0] h-[10px] w-[10px]" />
              <p>Guest</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="rounded-full bg-[#9BDD7C] h-[10px] w-[10px]" />
              <p>User</p>
            </div>
          </div>
        </div>
        <Chart1 />
      </div>
    </div>
  );
};

export default Chart;
