import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import '../CSS/LoginCss.css'
import {useForm} from 'react-hook-form'
import '../CSS/BtnCss.css'
import { Link, useSearchParams } from 'react-router-dom'
import ModeContext from '../Context/ModeContext'
import axios from 'axios';
import AdminContext from '../Context/AdminContext'
import { useNavigate } from 'react-router-dom'
const SignUpPageComp = () => {
  const {admin,setAdmin}= useContext(AdminContext);
  const navigate= useNavigate();
  const {mode}= useContext(ModeContext)
  const {register,handleSubmit} = useForm();
  const onSubmit=async(data)=>{
    const Response= await axios.post('/api/user/v1/RegisterUser',data);
    console.log(Response.status)
    if(Response.status===200){
      if(Response.data.user.isVerified===true){
        console.log(Response.data.user.isVerified)
          navigate('/home');
      }else{
        navigate('/verify');
      }
    }
}   
  return (
    <div className={` border border-black flex ${mode==='light'?'bg-white text-black': 'bg-[#2f2f2f] text-white'}`}>
      <div  className=' w-3/5 flex flex-col items-center justify-between'>
      <div className='flex flex-col mt-28'>
        <span className='font-bold text-6xl py-2'>Holla,</span>
        <span  className='font-bold text-6xl'>Welcome to <br/>NewMeta</span>
        <span className='font-thin text-sm py-2'>NewMeta will be your Special place</span>
      </div>
      <form className='flex flex-col  py-2' onSubmit={handleSubmit(onSubmit)}>
        <Input className=''  type='text' placeholder='Shaktiman' id={'FullName'} register={register} required/>
        <Input className='' type='email' placeholder='Robot@gmail.com' id={'Email'} register={register} required/>
        <Input className=''  type='password' placeholder='***********' id={'Password'} register={register} required/>

      <button className='button-29 my-2 bg-purple-500' type='submit'>Sign Up</button>
      </form>
      <div className='flex flex-col py-10'>
      <span className='font-thin text-sm underline'>Already have an Account? <Link to={'/login'}>SignIn</Link></span>
      </div>      
      </div>
      <div className='w-[600px] h-full'>
      <div className='setImg'>
      </div>
      </div>
    </div>
  )
}

export default SignUpPageComp