import React from "react";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";

/**
 * The `Header` function returns a div element containing a title, a search input, a bell icon, and a
 * user icon.
 * @returns The Header component is returning a JSX element. It is a div element with the class name
 * "flex justify-between items-center". Inside the div, there is an h1 element with the text
 * "Dashboard" and the class names "text-black font-bold text-[21px] sm:text-[24px]". There is also
 * another div element with the class names "flex justify-between items-center gap-
 */
const Header = () => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-black font-bold text-[21px] sm:text-[24px]">
        Dashboard
      </h1>
      <div className="flex justify-between items-center gap-3">
        <input
          placeholder="Search..."
          className="hidden sm:block rounded-xl w-[120px] sm:w-[180px] h-[30px] font-lato text-[#B0B0B0] text-[14px] px-4"
        />
        <img src={bellimg} alt="bell" className="w-[18px] h-[20px]" />
        <img src={userimg} alt="user" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
