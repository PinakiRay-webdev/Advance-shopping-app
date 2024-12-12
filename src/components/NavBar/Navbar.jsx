import React from "react";
import logo from "./Assets/logo.svg";
import { categoriesArray, navItems } from "../../Utils/utils";
import { IoLocationSharp,} from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-fit border-b">
      <div className="max-w-screen-xl h-16 mx-auto flex items-center gap-8 px-3">
        {/* logo section  */}
        <img className="w-32 cursor-pointer" src={logo} alt="" />

        {/* search items area */}
        <form className="flex items-center gap-4 ring-1 ring-green-500 px-1 py-2 w-[50vw] rounded-sm">
          <select className="font-semibold outline-none">
            {categoriesArray.map((Element, id) => (
              <option className="capitalize" key={id} value={Element.item}>
                {Element.item}
              </option>
            ))}
          </select>

          <input
            className="w-full px-3 outline-none border-l-2 border-green-500"
            type="text"
            placeholder="Search items..."
          />
        </form>

        {/* location section  */}
        <div className="flex items-baseline gap-2 cursor-pointer">
          <p className="text-xl text-green-600">
            <IoLocationSharp />
          </p>
          <p className="font-semibold text-green-800">Location</p>
        </div>
          
          {/* nav elements  */}
        {navItems.map((Element, id) => (
          <div key={id} className="flex items-baseline gap-2 cursor-pointer">
            <p className="text-2xl text-green-600">
              {<Element.icon/>}
            </p>
            <p className="font-semibold text-green-800">{Element.element}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
