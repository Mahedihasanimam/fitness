import Image from "next/image";
import React from "react";
import image1 from "../../public/image/Rectangle 22.png";
import { Button } from "antd";
const RunSection = () => {
  return (
    <div className="bg-[#001118] lg:pt-20 md:p-12 p-2 pb-12 px-2">
      <div className="bg-[#222222] text-white rounded-lg container mx-auto p-12 lg:flex md:flex space-y-12 items-center justify-between gap-8">
        <div className="max-w-lg">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold">Run an Extra Mile Easily</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]">
          We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
          </p>
          <Button
          style={{border: "none",backgroundColor:'#E6533C',color:'white',padding:'30px 55px'}}
          size="large"
            rel="noopener noreferrer"
            
            className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-full"
          >
            Join Now!
          </Button>
        </div>
        <div className="">
          <Image className="h-full  rounded-3xl" height={0} width={0} src={image1} alt="image"/>
        </div>
      </div>
    </div>
  );
};

export default RunSection;
