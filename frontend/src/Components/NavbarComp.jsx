import React, { useContext } from "react";
import "../CSS/BtnCss.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import ModeContext from "../Context/ModeContext";
const NavbarComp = () => {
  const { mode, setMode } = useContext(ModeContext);

  const handleToggle=()=>{
    setMode(mode==='light'? 'dark':'light');

  }
  return (
    <nav
      className={`border border-b-blue-500 w-full h-12 flex items-center ${
        mode === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className="flex sm:justify-end justify-start items-center sm:ps-10 ps-2 text-center w-[50%]">
        <span className="font-bold text-xl italic text-purple-500 sm:text-3xl hover:cursor-none">
          New
        </span>
        <span className="font-bold text-3xl italic text-purple-500 sm:text-5xl hover:cursor-none">
          M
        </span>
        <span className="font-bold text-xl italic text-purple-500 sm:text-3xl hover:cursor-none">
          eta
        </span>
      </div>
      <div className="w-[50%] flex justify-end items-center">
        <div className="me-3 hover:cursor-pointer" onClick={handleToggle}>
            {mode==='light'?
            <FaMoon color="#7242f5" size={20} />
            :
            <FaSun color="yellow" size={20}/>
            }
        </div>
        <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500">
          SignUp
        </button>
        <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500 me-2 sm:me-10 mx-2">
          SignIn
        </button>
      </div>
    </nav>
  );
};

export default NavbarComp;
