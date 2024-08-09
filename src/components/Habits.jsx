"use client";
import Image from "next/image";
import image1 from "../../public/image/image 2.png";
import image2 from "../../public/image/image 3.png";
import image3 from "../../public/image/image 4.png";

import { Typography } from "antd";
import React from "react";

const Habits = () => {
  return (
   <div className="bg-[#001118] text-white">
     <div className=" container mx-auto">
      <div className="max-w-4xl mx-auto text-center py-24 px-4">
        <h1 style={{ color: "white" }} className="font-extrabold  text-[48px]">
          Change Your Habits
        </h1>
        <p className="text-[#FFFFFF80]">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or <br /> access to a gym.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-8 text-center">
        <div className="text-center max-w-lg px-4">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <Image height={0} width={0} src={image2} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Movement</h3>
            <p className="text-[#FFFFFF80] max-w-lg">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-lg">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <Image height={0} width={0} src={image1} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Time</h3>
            <p className="text-[#FFFFFF80] max-w-sm text-center">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-lg">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <Image height={0} width={0} src={image2} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Practice</h3>
            <p className="text-[#FFFFFF80] max-w-md">
              We believe fitness should be accessible to everyone
            </p>
          </div>
        </div>
        <div className="text-center max-w-md">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <Image height={0} width={0} src={image3} />
            </div>
          </div>
          <div>
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
