import React from 'react'
import Input from '../Components/Input'
import '../CSS/LoginCss.css'
import Button from '../Components/Button'
const LoginPageComp = () => {
  return (
    <div className='h-screen w-screen border border-black flex'>
      <div  className=' w-3/5 flex flex-col items-center justify-between'>
      <div className='flex flex-col mt-28'>
        <span className='font-bold text-6xl py-2'>Holla,</span>
        <span  className='font-bold text-6xl'>Welcome Back</span>
        <span className='font-thin text-sm py-2'>Hey welcome back to your Special place</span>
      </div>
      <form className='flex flex-col  py-2'>
        <Input className='' type='email' placeholder='Robot@gmail.com'/>
        <Input className=''  type='password' placeholder='***********'/>
        <span className='font-thin text-sm underline'>Forgot Password?</span>
        <Button text={'Sign In'}/>
        <Button text={'Google'}/>
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