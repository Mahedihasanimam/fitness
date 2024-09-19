
"use client";
import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  AlertOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  MailFilled,
  MenuOutlined,
  OrderedListOutlined,
  PhoneOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
// import "./App.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const workoutsMenu = (
    <Menu>
      <Menu.Item key="1">Cardio</Menu.Item>
      <Menu.Item key="2">Strength Training</Menu.Item>
      <Menu.Item key="3">HIIT</Menu.Item>
      <Menu.Item key="4">Endurance</Menu.Item>
      <Menu.Item key="5">Flexibility</Menu.Item>
      <Menu.Item key="6">Core Workouts</Menu.Item>
      <Menu.Item key="7">Bodyweight Training</Menu.Item>
    </Menu>
  );

  // Dropdown menu for Classes
  const classesMenu = (
    <Menu>
      <Menu.Item key="1">Yoga</Menu.Item>
      <Menu.Item key="2">Pilates</Menu.Item>
      <Menu.Item key="3">Spinning</Menu.Item>
      <Menu.Item key="4">Zumba</Menu.Item>
      <Menu.Item key="5">CrossFit</Menu.Item>
      <Menu.Item key="6">Boxing</Menu.Item>
      <Menu.Item key="7">Dance Aerobics</Menu.Item>
      <Menu.Item key="8">Barre</Menu.Item>
      <Menu.Item key="9">Kickboxing</Menu.Item>
      <Menu.Item key="10">Bootcamp</Menu.Item>
    </Menu>
  );

  return (
    <div>

      {/* Top Nav start ------------------------- */}
      <div className="bg-black text-white p-3   w-full lg:block md:block hidden">
        <div className=" flex items-center  justify-between px-6 pr-8   container mx-auto">
          <div className="">
            <h3 className=" text-sm">
              <ClockCircleOutlined style={{ color: "red" }} /> Start on : 09:00
              AM- 05:00 PM
            </h3>
          </div>
          <div>
            <p className="text-sm">
              <MailFilled style={{ color: "red" }} /> Example@example.com
            </p>
          </div>
        </div>
      </div>
      {/* Top Nav End ------------------------- */}


      {/* Navbar start ---------------------- */}
      <nav className="w-full bg-[#E6533C] text-white font-inter p-2  ">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo----------------- */}
          <div className="text-4xl font-bold">Fitness</div>

          {/* Desktop Menu-------------------------- */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href={"/"} className="cursor-pointer">
              Home
            </Link>
            <Dropdown overlay={workoutsMenu}>
              <Link href={"#training"} className="cursor-pointer">
                Workouts
              </Link>
            </Dropdown>
            <Dropdown overlay={classesMenu}>
              <Link href={"/"} className="cursor-pointer">
                Classes
              </Link>
            </Dropdown>

            <Link href={"#trainers"} className="cursor-pointer">
              Trainers
            </Link>
            <Link href={"/"} className="cursor-pointer">
              Membership
            </Link>
            <Link href={"/"}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button--------------------------------- */}
          <div className="md:hidden">
            <Button icon={<MenuOutlined />} onClick={toggleMobileMenu} />
          </div>
        </div>

        {/* Mobile Menu--------------------------------------------------------------- */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#E6533C] text-white font-inter border-t  h-screen">
            <div className="flex flex-col  px-4 py-6 space-y-4">
              <Link
                href={"/"}
                className="cursor-pointer flex items-center gap-4"
              >
                {" "}
                <HomeOutlined /> Home
              </Link>
              <Dropdown overlay={workoutsMenu}>
                <Link
                  href={"training"}
                  className="cursor-pointer flex items-center gap-4"
                >
                  <FormOutlined /> Workouts
                </Link>
              </Dropdown>
              
              <Dropdown overlay={classesMenu}>
                <Link
                  href={"/"}
                  className="cursor-pointer flex items-center gap-4"
                >
                  {" "}
                  <OrderedListOutlined /> Classes
                </Link>
              </Dropdown>

              <Link
                href={"/"}
                className="cursor-pointer flex items-center gap-4"
              >
                {" "}
                <AlertOutlined />
                Trainers
              </Link>
              <Link
                href={"/"}
                className="cursor-pointer flex items-center gap-4"
              >
                {" "}
                <UserDeleteOutlined /> Membership
              </Link>
              <Link
                href={"/"}
                className="cursor-pointer flex items-center gap-4"
              >
                {" "}
                <PhoneOutlined /> Contact Us
              </Link>
            
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
