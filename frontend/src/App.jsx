
import React,{useState,useEffect} from 'react'
import LoginPageComp from './Components/LoginPageComp'
import AdminContextProvider from './Context/AdminContextProvider'
import HomePage from './Pages/HomePage'
import ModeContextProvider from './Context/ModeContextProvider'
const App = () => {
  return(
    <AdminContextProvider>
      <ModeContextProvider>
   <HomePage/>
   </ModeContextProvider>
    </AdminContextProvider>
  )
}

export default App