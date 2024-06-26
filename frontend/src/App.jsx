
import React,{useState,useEffect} from 'react'
import LoginPageComp from './Pages/LoginPageComp'
import AdminContextProvider from './Context/AdminContextProvider'
const App = () => {
  return(
    <AdminContextProvider>
   <LoginPageComp/> 
    </AdminContextProvider>
  )
}

export default App