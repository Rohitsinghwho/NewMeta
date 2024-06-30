import React from 'react'

function Card() {
  return (
    <div className="sm:w-[300px] rounded-md border flex sm:flex-col items-center justify-center p-2 mt-4 m-1">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Laptop"
      className="sm:h-[200px] sm:w-full rounded-md object-cover h-[63px] w-[63px]"
    />
    <div className="sm:p-4 p-2">
      <h1 className="sm:text-lg font-semibold text-sm">About Macbook</h1>
      <p className="sm:mt-3 sm:text-sm text-xs text-gray-600 overflow-hidden text-clip text-wrap h-10 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
      <button
        type="button"
        className=" hidden sm:inline mt-4 rounded-sm bg-purple-500 px-2.5 py-2 text-[10px]
         font-semibold text-white shadow-sm hover:bg-purple-600 
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-black"
      >
        Read
      </button>
    </div>
  </div>
  )
}

export default Card