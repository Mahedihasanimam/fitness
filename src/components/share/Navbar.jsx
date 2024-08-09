"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";

import Link from "next/link";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="absolute w-full z-50 bg-[#001118] font-inter my-10 px-4 ">
        <div className="container mx-auto   text-white">
      <div className="flex items-center justify-between px-2 ">
        <MenuOutlined 
        className="lg:hidden md:hidden block"
        onClick={()=>{
            setOpenMenu(true)
        }} />
        <h3 className="font-bold text-4xl text-[#E6533C] italic ">Fitness</h3>
        <div className="lg:flex md:flex items-center justify-center hidden ">
          <AppMenu className="" />
        </div>
      </div>
      <Drawer
     
        open={openMenu}
        placement="left"
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <AppMenu className="lg:hidden" isinline />
      </Drawer>
    </div>
    </div>
  );
};
const AppMenu = ({ isinline = false }) => {
  return (
    <div className="font-inter ">
      <Menu
    className="   text-lg  p-4 bg-[#001118] custom-menu "
      mode={isinline ? "inline" : "horizontal"}
      items={[
        {
          label: <Link style={{color:'white'}} href={'/'}><Button className="rounded-full font-bold" type="primary" danger>
          Home
        </Button></Link>,
          key: "Home",
        },
        {
          label: <Link style={{color:'white'}} href={'/service'}>Service</Link>,
          key: "services",
        },
        {
          label: <Link style={{color:'white'}} href={'/contact'}>Contact</Link>,
          key: "contact Us",
        },
        {
          label: <Link style={{color:'white'}} href={'/about'}>About</Link>,
          key: "About",
        },
      ]}
    ></Menu>
    </div>
  );
};
export default Navbar;