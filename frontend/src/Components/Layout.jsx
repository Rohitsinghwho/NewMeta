import React from 'react';
import NavbarComp from './NavbarComp';
import { Outlet } from 'react-router-dom'; // Import Outlet

function Layout() {
  return (
    <div className="h-screen w-screen">
      <NavbarComp />
        <Outlet/> {/* Define the outlet for child routes */}
    </div>
  );
}

export default Layout;
