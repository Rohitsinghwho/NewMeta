import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import '../CSS/LoginCss.css'
import {useForm} from 'react-hook-form'
import '../CSS/BtnCss.css'
import { Link, useSearchParams } from 'react-router-dom'
import ModeContext from '../Context/ModeContext'
import axios from 'axios';
import AdminContext from '../Context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Impo
import { useNavigate } from 'react-router-dom'

const MyAlert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};
const SignUpPageComp = () => {
  const {admin,setAdmin}= useContext(AdminContext);
  const navigate= useNavigate();
  const {mode}= useContext(ModeContext)
  const {register,handleSubmit} = useForm();
  const onSubmit=async(data)=>{
    try {
      const Response= await axios.post('/api/user/v1/RegisterUser',data);
      if(Response.status===200){
        if(Response.data.user.isVerified===true){
          setAdmin(Response.data.userToSend)
          localStorage.setItem('admin',JSON.stringify(Response.data.userToSend))
            navigate('/home');
        }else{
          navigate('/verify');
        }
      }
    } catch (error) {
      toast.error(<MyAlert message={'Please Fill Complete details'} type="danger" />, { 
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      })
      console.log("Error in SignUp Comp",e);
    }
}   
  return (
    <div className={`h-full lg:h-auto flex flex-col justify-center sm:flex-row ${mode==='light'?'bg-white text-black': 'bg-[#111827] text-white'}`}>
      <div  className='lg:w-3/5 flex flex-col items-center justify-between'>
      <div className='flex flex-col lg:mt-28'>
        <span className='font-bold sm:text-6xl text-3xl py-2'>Holla,</span>
        <span  className='font-bold sm:text-6xl text-3xl'>Welcome to <br/>NewMeta</span>
        <span className='font-thin sm:text-sm text-xs py-2'>NewMeta will be your Special place</span>
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
      <div className='w-[600px] h-full hidden lg:inline'>
      <div className='setImg'>
      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUpPageComp