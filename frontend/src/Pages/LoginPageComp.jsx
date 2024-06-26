import React, { useContext } from 'react'
import Input from '../Components/Input'
import '../CSS/LoginCss.css'
import {useForm} from 'react-hook-form'
import '../CSS/BtnCss.css'

const LoginPageComp = () => {
  const {register,handleSubmit} = useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div className='h-screen w-screen border border-black flex'>
      <div  className=' w-3/5 flex flex-col items-center justify-between'>
      <div className='flex flex-col mt-28'>
        <span className='font-bold text-6xl py-2'>Holla,</span>
        <span  className='font-bold text-6xl'>Welcome Back</span>
        <span className='font-thin text-sm py-2'>Hey welcome back to your Special place</span>
      </div>
      <form className='flex flex-col  py-2' onSubmit={handleSubmit(onSubmit)}>
        <Input className='' type='email' placeholder='Robot@gmail.com' id={'Email'} register={register} required/>
        <Input className=''  type='password' placeholder='***********' id={'Password'} register={register} required/>
        <span className='font-thin text-sm underline'>Forgot Password?</span>
      <button className='button-29 my-2' type='submit'>Sign Up</button>
      </form>
      <div className='flex flex-col py-10'>
      <span className='font-thin text-sm underline'>Don't have an Account? SignUp</span>
      </div>      
      </div>
      <div className='w-[600px] h-full'>
      <div className='setImg'>
      </div>
      </div>
    </div>
  )
}

export default LoginPageComp