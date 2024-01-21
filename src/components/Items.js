import React from "react";
import dashimg from "../assets/dashboard_icon.png";
import scheduleimg from "../assets/schedule_icon.png";
import settingimg from "../assets/setting_icon.png";
import userimg from "../assets/user_icon.png";
import transactionimg from "../assets/transactions.svg";
import { Link } from "react-router-dom";

const Items = () => {
  
 /**
  * The `logout` function clears the local storage and redirects the user to the homepage.
  */
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="cursor-pointer flex md:gap-6 lg:pr-12 gap-2 lg:gap-10 flex-col md:mt-6 items-start">
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={dashimg} className="w-[14px] h-[14px]" />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          DashBoard
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img
          alt="dashboard"
          src={transactionimg}
          className="w-[14px] h-[14px]"
        />
        <p className="font-normal text-[16px] md:text-[18px]">Transactions</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={scheduleimg} className="w-[14px] h-[14px]" />
        <p className="font-normal text-[16px] md:text-[18px]">Schedules</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={userimg} className="w-[14px] h-[14px]" />
        <p className="font-normal text-[16px] md:text-[18px] hover:font-semibold">Users</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={settingimg} className="w-[14px] h-[14px]" />
        <p className="font-normal text-[16px] md:text-[18px]">Settings</p>
      </div>

      <div className="flex justify-between items-center gap-3" onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 -ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <p className="font-normal text-[16px] md:text-[18px] hover:font-semibold">
          Logout
        </p>
      </div>
    </div>
  );
};

export default Items;
