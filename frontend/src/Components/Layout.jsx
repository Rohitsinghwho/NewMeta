import React from 'react';
import NavbarComp from './NavbarComp';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Footer from './Footer';

function Layout() {
  return (
    <div className="h-screen ">
      <NavbarComp />
        <Outlet/> {/* Define the outlet for child routes */}
        <Footer/>
    </div>
  );
}

export default Layout;
