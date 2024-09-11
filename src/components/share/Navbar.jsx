"use client";

import { DownOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Menu, message, Space } from "antd";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "Home1",
      key: "1",
      icon: <HomeOutlined />,
    },
    {
      label: "Home2",
      key: "2",
      icon: <HomeOutlined />,
    },
    {
      label: "Home3",
      key: "3",
      icon: <HomeOutlined />,
      danger: true,
    },
  ];

  const serviceitems = [
    {
      label: "service1",
      key: "1",
      icon: <DownOutlined />,
    },
    {
      label: "Service2",
      key: "2",
      icon: <HomeOutlined />,
    },
    {
      label: "Service3",
      key: "3",
      icon: <HomeOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const servicesProps = {
    items: serviceitems, // Corrected to pass the items array from serviceitems
    onClick: handleMenuClick,
  };

  return (
    <div className="absolute w-full z-50 bg-[#E6533C] text-white font-inter my-10 px-4">
      <div className="container mx-auto text-white">
        <div className="flex items-center justify-between px-2">
          <MenuOutlined
            className="lg:hidden md:hidden block"
            onClick={() => {
              setOpenMenu(true);
            }}
          />
          <Link href={'/'} className="font-bold text-5xl text-white italic">Fitness</Link>
          <div className="lg:flex md:flex items-center justify-center hidden">
            <AppMenu menuProps={menuProps} servicesProps={servicesProps} className="" />
          </div>
        </div>
        <Drawer
          open={openMenu}
          placement="left"
          onClose={() => {
            setOpenMenu(false);
          }}
        >
          <AppMenu menuProps={menuProps} servicesProps={servicesProps} className="lg:hidden" isinline />
        </Drawer>
      </div>
    </div>
  );
};

const AppMenu = ({ isinline = false, menuProps, servicesProps }) => {
  return (
    <div className="font-inter">
      <Menu
        className="text-lg p-6 bg-[#E6533C] custom-menu text-white font-bold"
        mode={isinline ? "inline" : "horizontal"}
        items={[
          {
            label: (
              <Dropdown className="" menu={menuProps}>
                <Space style={{ color: "white" }}>
                  Home
                  <DownOutlined />
                </Space>
              </Dropdown>
            ),
            key: "home",
          },
          {
            label: (
              <Dropdown className="" menu={servicesProps}>
                <Space style={{ color: "white" }}>
                  Services
                  <DownOutlined />
                </Space>
              </Dropdown>
            ),
            key: "services",
          },
          {
            label: (
              <Link style={{ color: "white" }} href="/#">
                Contact
              </Link>
            ),
            key: "contact Us",
          },
          {
            label: (
              <Link className="hover:border-b-[#fff]" style={{ color: "white", }} href="/#">
                About
              </Link>
            ),
            key: "About",
          },
          {
            label: (
              <Link style={{ color: "white" }} href="/dashboard">
                Dashboard
              </Link>
            ),
            key: "dashboard",
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
