import React, { useEffect, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import Items from "./Items";

/**
 * The SideBar component is a responsive sidebar with a menu icon that toggles a dropdown menu when
 * clicked.
 * @returns The SideBar component is returning a JSX element.
 */

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
   /* The code snippet represents a JSX element in a React component. It is a sidebar component that
   renders a responsive sidebar with a menu icon. Here's a breakdown of what each part of the JSX
   element does: */

    <div
      className={`bg-[#4285F4] md:h-[150vh] relative flex flex-col justify-between py-4 md:py-0 text-gray-100 px-6 rounded-3xl`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <h1 className="font-bold md:mt-10 text-[24px] md:text-[36px] md:ml-1">
            Board.
          </h1>
          <HiMenuAlt3
            size={30}
            className="md:hidden cursor-pointer absolute right-0 my-auto mr-5 mt-1"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="mt-12 mx-auto right-0 absolute bg-[#4285F4] p-4 rounded-lg mr-1">
              <Items />
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <Items />
        </div>
      </div>

      <div className="md:flex hidden flex-col justify-between mt-10 mb-12">
        <div className="flex flex-col cursor-pointer justify-between mt-20 text-md ml-2 text-white gap-2">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
