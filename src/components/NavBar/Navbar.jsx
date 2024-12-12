import React , {useState} from "react";
import logo from "./Assets/logo.svg";
import { categoriesArray, navItems } from "../../Utils/utils";
import { IoLocationSharp,IoCloseCircleOutline} from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen) 
    // document.body.style.overflow = "hidden" 
  }
  return (
    <div className="w-full h-fit border-b">
      <div className="max-w-screen-xl h-[8vh] mx-auto flex items-center gap-8 px-3 relative">
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
        <div className="hidden lg:flex items-baseline gap-2 cursor-pointer">
          <p className="text-xl text-green-600">
            <IoLocationSharp />
          </p>
          <p className="font-semibold text-green-800">Location</p>
        </div>
          
          {/* nav elements  */}
        {navItems.map((Element, id) => (
          <div key={id} className="hidden lg:flex items-baseline gap-2 cursor-pointer">
            <p className="text-2xl text-green-600">
              {<Element.icon/>}
            </p>
            <p className="font-semibold text-green-800">{Element.element}</p>
          </div>
        ))}

        <p onClick={toggleMenu} className="text-2xl cursor-pointer absolute right-2 lg:hidden" >{isMenuOpen ? <IoCloseCircleOutline/> : <HiOutlineMenu/>}</p>
      </div>
      <div className={`absolute w-[90vw] h-[92vh]  py-4 bg-black text-white mx-auto px-3 transition-all duration-150 ease-in-out ${isMenuOpen ? "right-[-1%]" : "right-[-100%]"} `} >
        {navItems.map((element , id) =>(
          <div key={id} className="flex items-center gap-3 cursor-pointer leading-10" >
            <p>{<element.icon/>}</p>
            <p>{element.element}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
