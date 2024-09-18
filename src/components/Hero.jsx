import React from "react";
import hero from "../../public/image/power-healthy-runner-handsome-lifestyle.png";
import Image from "next/image";
import { Button, Flex } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
const Hero = () => {
    
  return (
    <div>
      <section className=" bg-gradient-to-r from-[#0b0b0b] via-[#333232] to-[#0b0b0b] text-white  ">
        <div className="container flex flex-col justify-between pt-12  mx-auto  lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
            <h1 className="lg:text-6xl text-4xl font-bold leading-none sm:text-[78px]">
              Get body in <span className="italic">shape</span> & stay healthy
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button
          style={{border: "none",backgroundColor:'#E6533C',color:'white',padding:'30px 55px'}}
          size="large"
            rel="noopener noreferrer"
            
            className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-full"
          >
            Join club Now !
          </Button>
                <Button
          style={{border:'solid',borderWidth:'1px',borderColor:'white',backgroundColor:'transparent',color:'white',padding:'30px 55px'}}
          size="large"
            rel="noopener noreferrer"
            
            className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer   text-white rounded-full"
          >
            Download App
          </Button>
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

            <div className=" rounded-md absolute top-1/4 right-5 lg:p-6 p-2  border-2 border-[#FFFFFF1A] bg-[#FFFFFF1A] w-fit ">
              <h3 className="lg:text-6xl text-4xl  font-extrabold ">500+</h3>
              <p className="font-normal text-[#FFFFFFA6] capitalize text-lg">
                Free Workout Videos
              </p>
            </div>
            <div className=" rounded-md absolute lg:bottom-1/4 bottom-0 lg:right-[58%]  md:right-2/3 px-6 py-2  border-2 border-[#FFFFFF1A] bg-[#3030308A] w-fit ">
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
