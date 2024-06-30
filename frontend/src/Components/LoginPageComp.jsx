import React, { useContext, useState } from 'react'
import Input from './Input'
import '../CSS/LoginCss.css'
import {useForm} from 'react-hook-form'
import '../CSS/BtnCss.css'
import { Link } from 'react-router-dom'
import ModeContext from '../Context/ModeContext'
import AdminContext from '../Context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyAlert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

const LoginPageComp = () => {
  const navigate= useNavigate();
  const {admin,setAdmin}= useContext(AdminContext)
  const {mode}= useContext(ModeContext)
  const {register,handleSubmit} = useForm();
    const onSubmit=(data)=>{
      axios.post('/api/user/v1/login',data).then((Response)=>{
        if(Response.status===200){
          setAdmin(Response.data.userToSend)
          localStorage.setItem('admin',JSON.stringify(Response.data.userToSend))
          navigate('/')
          }
          }).catch((e)=>{
            toast.error(<MyAlert message={'Either Email or Password is Wrong'} type="danger" />, { 
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
            })
            console.log("Error in Login Comp",e);
          });     
    }
  return (
    <div className={`h-full lg:h-auto
     flex flex-col sm:flex-row 
     justify-center ${mode==='light'?'bg-white text-black': 'bg-[#111827] text-white'}`}>
      <div  className=' lg:w-3/5 flex flex-col items-center justify-between'>
      <div className='flex flex-col lg:mt-28'>
        <span className={`font-bold sm:text-6xl text-3xl py-2`}>Holla,</span>
        <span  className='font-bold sm:text-6xl text-3xl'>Welcome Back</span>
        <span className='font-thin sm:text-sm py-2 text-xs'>Hey welcome back to your Special place</span>
      </div>
      <form className='flex flex-col  py-2' onSubmit={handleSubmit(onSubmit)}>
        <Input className='' type='email' placeholder='Robot@gmail.com' id={'Email'} register={register} required/>
        <Input className=''  type='password' placeholder='***********' id={'Password'} register={register} required/>
        <span className='font-thin text-sm underline'>Forgot Password?</span>
      <button className='button-29 my-2 bg-purple-500' type='submit'>Sign Up</button>
      </form>
      <div className='flex flex-col py-10'>
      <span className='font-thin text-sm underline'>Don't have an Account?<Link to={'/signup'}>SignUn</Link></span>
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

export default LoginPageComp