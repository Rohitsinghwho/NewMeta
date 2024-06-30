import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { resolvePath, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import AdminContext from '../Context/AdminContext';

const MyAlert = ({ message, type }) => {
    return (
      <div className={`alert alert-${type}`}>
        {message}
      </div>
    );
  };
  
function EmailVerificationPage() {
    const {admin,setAdmin}= useContext(AdminContext)
    const navigate= useNavigate()
    const handleVerification=async()=>{
        try {
            const Response=  await axios.get('/api/user/v1/getUser');
            if(Response.status===200){
                navigate('/');
                setAdmin(Response.data.user);
                console.log(admin)
            }
        } catch (error) {
            toast(<MyAlert message="Please Verfiy your Email Before proceeding" type="error" />);
        }
    }

  return (

    <div className='flex justify-center items-center'>
        <div className='w-[310px] sm:w-96 border border-gray-300 rounded-md outline-none shadow-md text-center mt-28 sm:p-8 p-2'>
            <h1 className='sm:text-3xl text-2xl font-bold sm:mt-6 mt-3'>Email Verification</h1>
            <p className='sm:text-md text-sm sm:mt-6 mt-3'>We have sent an Email to verify that it's you.</p>
            <p className='sm:text-md text-sm'>Please check your email for verification link after you click on the link please refresh the Page</p>
            <p className='sm:text-md text-sm'>If you have verified your Email Address please Click on the Button</p>
            <button onClick={handleVerification} className='sm:text-md bg-purple-500  sm:mt-4 sm:p-3 mt-2 p-2 rounded-md hover:cursor-pointer hover:bg-purple-600'>Proceed</button>
            {/* <div className='mt-1 alert'>Please Verify your email first</div> */}
            <ToastContainer />
        </div>
    </div>
  )
}

export default EmailVerificationPage