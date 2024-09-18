"use client";
import Image from "next/image";
import image1 from "../../public/image/bodybuilder1.jpg";
import image2 from "../../public/image/bodybuilder2.jpg";
import image3 from "../../public/image/bodybuilder3.jpg";

import { Typography } from "antd";
import React from "react";

const  Habits = () => {
  return (
   <div className="bg-[#001118] text-white">
     <div className=" container mx-auto">
      <div className="max-w-4xl mx-auto text-center py-24 px-4">
        <h1 style={{ color: "white" }} className="font-bold pb-4  lg:text-6xl md:text-4xl text-3xl">
          Change Your Habits
        </h1>
        <p className="text-[#FFFFFF80]">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or <br /> access to a gym.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-2 lg:grid-cols-4 space-y-8 text-center">
        <div className="text-center max-w-lg border border-[#FFFFFF20] rounded-lg p-2 hover:border-b-[#E6533C] hover:border-r-[#E6533C] hover:border-b-4 border-r-4 border-b-4 hover:border-r-4 cursor-pointer  px-4">
          <div className="avatar">
            <div className="w-36 rounded-full border-4 border-[#2f2f2f]">
              <Image height={0} width={0} src={image2} alt="image" />
            </div>
          </div>
          <div className="max-w-[200px] mx-auto pt-2">
            <h3 className="text-lg font-bold">Movement</h3>
            <p className="text-[#FFFFFF80] max-w-lg">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-lg border border-[#FFFFFF20] rounded-lg p-2 hover:border-b-[#E6533C] hover:border-r-[#E6533C] hover:border-b-4 border-r-4 border-b-4 hover:border-r-4 cursor-pointer  px-4">
          <div className="avatar">
            <div className="w-36 rounded-full border-4 border-[#2f2f2f]">
              <Image height={0} width={0} src={image1} alt="image" />
            </div>
          </div>
          <div className="max-w-[200px] mx-auto pt-2">
            <h3 className="text-lg font-bold">Time</h3>
            <p className="text-[#FFFFFF80] max-w-sm text-center">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-lg border border-[#FFFFFF20] rounded-lg p-2 hover:border-b-[#E6533C] hover:border-r-[#E6533C] hover:border-b-4 border-r-4 border-b-4 hover:border-r-4 cursor-pointer  px-4">
          <div className="avatar">
            <div className="w-36 rounded-full border-4 border-[#2f2f2f]">
              <Image height={0} width={0} src={image2} alt="image" />
            </div>
          </div>
          <div className="max-w-[200px] mx-auto pt-2">
            <h3 className="text-lg font-bold">Practice</h3>
            <p className="text-[#FFFFFF80] max-w-md">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-lg border border-[#FFFFFF20] rounded-lg p-2 hover:border-b-[#E6533C] hover:border-r-[#E6533C] hover:border-b-4 border-r-4 border-b-4 hover:border-r-4 cursor-pointer  px-4">
          <div className="avatar">
            <div className="w-36 rounded-full border-4 border-[#2f2f2f]">
              <Image height={0} width={0} src={image3} alt="image" />
            </div>
          </div>
          <div className="max-w-[200px] mx-auto pt-2">
            <h3 className="text-lg font-bold">Weight loss</h3>
            <p className="text-[#FFFFFF80] max-w-md">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Habits;
