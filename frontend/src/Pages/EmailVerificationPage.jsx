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
    const [alert,showAlert]= useState(false);
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
        // console.log("inside")
        // console.log(Response.response.status)
        // if(Response.response.status===400){
        // }
        // console.log(Response);
    }

  return (

    <div className='flex justify-center items-center'>
        <div className='border border-gray-300 rounded-md outline-none shadow-md text-center mt-28 p-8'>
            <h1 className='text-3xl font-bold mt-6'>Email Verification</h1>
            <p className='text-md mt-6'>We have sent an Email to verify that it's you.</p>
            <p className='text-md'>Please check your email for verification link after you click on the link please refresh the Page</p>
            <p className='text-md'>If you have verified your Email Address please Click on the Button</p>
            <button onClick={handleVerification} className='text-md bg-purple-500  mt-4 p-3 rounded-md hover:cursor-pointer hover:bg-purple-600'>Proceed</button>
            {/* <div className='mt-1 alert'>Please Verify your email first</div> */}
            <ToastContainer />
        </div>
    </div>
  )
}

export default EmailVerificationPage