import React, { useContext } from "react";
import ModeContext from "../Context/ModeContext";
import Card from "./Card";

function LandingComp() {
    const {mode}= useContext(ModeContext);
  return (
    <div className={`flex justify-center p-3 ${mode==='light'?'bg-white text-black':'bg-[#111827] text-white'}`}>
      <div className="flex  flex-col sm:w-3/4 w-[90%] h-full">
        {/* div 1 for hero */}
        <div className="border-b-2 flex flex-col items-center sm:justify-center mt-5 sm:h-[400px]">
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <h2 className={`sm:text-5xl text-3xl font-bold`}>Welcome to</h2>
          <div className="flex items-center justify-center">
          <h2 className="sm:text-5xl text-3xl font-bold pl-3 ">New</h2>
          <h2 className="sm:text-6xl text-4xl font-bold text-purple-500  ">M</h2>
          <h2 className="sm:text-5xl text-3xl font-bold ">eta</h2>
          </div>
        </div>
        <p className={`p-3 text-sm sm:text-md flex
         justify-center items-center sm:w-3/4 w-[85%]  sm:mt-7 text-center font-light space-x-2 ${mode==='dark'&&'text-slate-400'}`}>
          Confused on which course to take? I have got you covered. Browse
          courses and find out the best course for you. Its free! Code With
          Harry is my attempt to teach basics and those coding techniques to
          people in short time which took me ages to learn.
        </p>
      </div>
      <div className="flex flex-col items-center mt-5 ">
        <h1 className="sm:underline underline-offset-8 sm:text-4xl text-transparent bg-clip-text font-semibold text-xl bg-gradient-to-r from-pink-500 to-violet-500 ">Recommended Articles</h1>
        <div className="flex flex-wrap justify-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
        </div>
    </div>
  );
}

export default LandingComp;
