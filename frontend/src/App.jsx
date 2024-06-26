
import React,{useState,useEffect} from 'react'
import LoginPageComp from './Components/LoginPageComp'
import AdminContextProvider from './Context/AdminContextProvider'
import HomePage from './Pages/HomePage'
import ModeContextProvider from './Context/ModeContextProvider'
import SignUpPageComp from './Components/SignUpPageComp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp'
import Layout from './Components/Layout'

const App = () => { 
  return(
    <AdminContextProvider>
      <ModeContextProvider>
        <Router>
          <NavbarComp/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPageComp/>}/>
            <Route path='/signup' element={<SignUpPageComp/>}/>
          </Routes>
        </Router>
   </ModeContextProvider>
    </AdminContextProvider>
  )
}

export default App