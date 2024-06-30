import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ModeContext from '../Context/ModeContext';

function Footer() {
    const {mode}= useContext(ModeContext)
  return (
    <div className={`flex flex-col sm:flex-row justify-between
      items-center p-5 ${mode === "light" ? "bg-white text-black" : "bg-[#1f2937] text-white"}`}>
        <div className='flex items-center sm:px-2  justify-between flex-col sm:flex-row'>
            <div className='flex items-center'>
            <span className='sm:text-3xl text-xl font-semibold '>New</span>
            <span className='sm:text-4xl text-2xl font-semibold text-purple-400'>M</span>
            <span className='sm:text-3xl text-xl font-semibold'>eta</span>
            </div>
            <div className='flex items-center justify-center sm:px-5'>
                <span className='sm:text-lg text-sm font-light'>Copyright reserved 2024</span>
            </div>
        </div>
        <div className='flex  w-36 h-10 justify-between items-center'>
            <FaInstagram size={25}/>
            <FaLinkedin size={25}/>
            <FaGithub size={25}/>
        </div>
    </div>
  )
}

export default Footer