import React, { useContext, useEffect } from "react";
import "../CSS/BtnCss.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import ModeContext from "../Context/ModeContext";
import { Link } from "react-router-dom";
import AdminContext from "../Context/AdminContext";
import axios from 'axios'
const NavbarComp = () => {
  const {admin,setAdmin}= useContext(AdminContext);
    const { mode, toggleMode } = useContext(ModeContext);
    const handleLogout=()=>{
      axios.post('/api/user/v1/logout').then((Response)=>{
        setAdmin('');
        localStorage.removeItem("admin");
        console.log(Response)
      }).catch((e)=>console.log("Error in Nav comp logout ",e));
    }
  return (
    <nav
      className={` w-[100%] h-12 flex items-center shadow-md shadow-slate-200 justify-center ${
        mode === "light" ? "bg-white text-black" : "bg-[#1f2937] text-white"
      }`}
    >
      <div className=" sm:ms-32 flex sm:justify-end justify-start items-center sm:ps-10 ps-2 text-center w-[50%]">
        <Link to={'/'}>
        <span className={`font-bold text-xl sm:text-3xl hover:cursor-none`}>
          New
        </span>
        <span className="font-bold text-3xl text-purple-500 sm:text-5xl hover:cursor-none">
          M
        </span>
        <span className="font-bold text-xl   sm:text-3xl hover:cursor-none">
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
        {!admin?<>
          <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500">
          <Link to={'/signup'}>SignUp</Link>
        </button>
        <button className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500 me-2 sm:me-10 mx-2">
          <Link to={'/login'}>SignIn</Link>
        </button>
        </>:
        <button onClick={handleLogout} className="sm:h-8 sm:w-20 h-7 w-16 text-sm outline-none rounded-md shadow-lg bg-purple-500 me-2 sm:me-10 mx-2">
        Logout
        </button>
        }
        
      </div>
    </nav>
  );
};

export default NavbarComp;
