import { FaBalanceScaleRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { NavMenu } from "./NavMenu";

export const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <NavMenu />
      <div className="flex items-center gap-2 text-2xl font-bold">
        <h1>Recipe Calories-Cal</h1>
        <FaBalanceScaleRight className="text-orange-500 text-3xl" />
      </div>
      <ul className="hidden  lg:flex gap-8 font-medium">
        <li className="text-orange-600 underline">Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <div className="flex items-center gap-5">
        <div className="hidden  md:flex gap-2 items-center bg-orange-100  px-5 py-1 rounded-full">
          <IoSearch className="text-slate-500" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <FaUserCircle className="text-orange-400 text-4xl" />
      </div>
    </div>
  );
};
