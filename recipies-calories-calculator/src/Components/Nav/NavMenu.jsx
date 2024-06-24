import { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden mr-3" onClick={() => setOpen(!open)}>
      {open ? (
        <AiOutlineCloseSquare className="text-orange-500 text-2xl cursor-pointer" />
      ) : (
        <RiMenuUnfoldFill className="text-orange-500 text-2xl cursor-pointer" />
      )}
      {open && (
        <ul className="font-semibold bg-amber-200  rounded-xl py-3 absolute">
          <li className=" hover:text-orange-800 hover:bg-amber-100 px-8 rounded-xl">
            Home
          </li>
          <li className=" hover:text-orange-800 hover:bg-amber-100 px-8 rounded-xl">
            Recipes
          </li>
          <li className=" hover:text-orange-800 hover:g-amber-100 px-8 rounded-xl">
            About
          </li>
          <li className=" hover:text-orange-800 hover:bg-amber-100 px-8 rounded-xl">
            Search
          </li>
        </ul>
      )}
    </div>
  );
};
