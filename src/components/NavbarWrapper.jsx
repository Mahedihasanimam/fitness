"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './share/Navbar';

const NavbarWrapper = ({ children }) => {
  const pathname = usePathname();

  // Define the routes where the Navbar should be hidden
  const noNavbarRoutes = ["/login", "/register", "/dashboard"];

  // Check if the current route is in the noNavbarRoutes array
  const shouldHideNavbar = noNavbarRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default NavbarWrapper;
