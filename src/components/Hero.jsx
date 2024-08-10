import React from "react";
import hero from "../../public/image/heroimg.png";
import Image from "next/image";
import { Button, Flex } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
const Hero = () => {
    
  return (
    <div>
      <section className="bg-[#001118] text-white ">
        <div className="container flex flex-col justify-between  mx-auto pt-20 lg:flex-row lg:justify-between ">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
            <h1 className="lg:text-6xl text-4xl font-bold leading-none sm:text-[78px]">
              Get body in <span className="italic">shape</span> & stay healthy
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold  bg-[#E6533C] text-white rounded-full"
              >
                Join Club Now!
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border  border-gray-100 rounded-full"
              >
                Download App
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center   lg:mt-0 relative ">
            <Image
              height={0}
              width={0}
              src={hero}
              alt="image"
              className="object-contain h-full"
            />

            <div className=" rounded-md absolute top-24 left-2/3 lg:p-6 p-2  border-2 border-[#FFFFFF1A] bg-[#FFFFFF1A] ">
              <h3 className="lg:text-6xl text-4xl  font-extrabold ">500+</h3>
              <p className="font-normal text-[#FFFFFFA6] capitalize text-lg">
                Free Workout Videos
              </p>
            </div>
            <div className=" rounded-md absolute bottom-24 lg:right-2/3 md:right-2/3 px-6 py-2  border-2 border-[#FFFFFF1A] bg-[#3030308A] ">
              <div className="flex items-center justify-center gap-4 " >

                <div className="h-[40px] w-[40px] bg-[#E6533C] rounded-full">
               
                </div>
                <div>
                  <h3 className="text-6xl font-extrabold ">350+</h3>
                  <p className="font-normal text-[#FFFFFFA6] capitalize text-lg">
                    Video tutorial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default Hero;
