import React from 'react'

const Input = ({type='text',placeholder='Enter PlaceHolder', label='Enter Label'}) => {
  return (

        <input className='border border-black w-[405px] rounded-md h-8 outline-none flex justify-center items-center p-4 my-1' type={type} placeholder={placeholder}/>

  )
}

export default Input