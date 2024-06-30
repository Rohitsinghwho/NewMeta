import React from 'react'

const Input = ({type='text',placeholder='Enter PlaceHolder',id,register}) => {
  return (
        <input 
        className='border border-black sm:w-[405px] w-64 rounded-md h-8 
        outline-none flex justify-center items-center p-4 my-1 text-xs sm:text-sm' 
        type={type} placeholder={placeholder} id={id} {...register(id,{required:true})}
        />
  )
}

export default Input