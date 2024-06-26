import React, { useContext, useEffect } from "react";
import "../CSS/BtnCss.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import ModeContext from "../Context/ModeContext";
import { Link } from "react-router-dom";
const NavbarComp = () => {
    const { mode, toggleMode } = useContext(ModeContext);
  return (
    <nav
      className={`border border-b-blue-500 w-[100%] h-12 flex items-center ${
        mode === "light" ? "bg-white" : "bg-[#2f2f2f] border border-b-white"
      }`}
    >
      <div className="flex sm:justify-end justify-start items-center sm:ps-10 ps-2 text-center w-[50%]">
        <Link to={'/'}>
        <span className={`font-bold text-xl italic text-purple-500 sm:text-3xl hover:cursor-none`}>
          New
        </span>
        <span className="font-bold text-3xl italic text-purple-500 sm:text-5xl hover:cursor-none">
          M
        </span>
        <span className="font-bold text-xl italic text-purple-500 sm:text-3xl hover:cursor-none">
          eta
        </span>
        </Link>
      </div>
      <div className="w-[50%] flex justify-end items-center">
        <div className="me-3 hover:cursor-pointer" onClick={toggleMode}>
            {mode==='light'?
            <FaMoon color="#7242f5" size={20} />
            :
            <FaSun color="yellow" size={20}/>
            }
        </div>
        <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500">
          <Link to={'/signup'}>SignUp</Link>
        </button>
        <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500 me-2 sm:me-10 mx-2">
          <Link to={'/login'}>SignIn</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavbarComp;
