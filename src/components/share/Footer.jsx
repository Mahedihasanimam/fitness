import {
  FacebookFilled,
  InstagramFilled,
  PinterestFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222222] text-white ">
      <div className="container mx-auto">
        {/* NEWS LATER SECTION --------------------------------- */}
        <div className="flex  items-center justify-between p-12 bg-[#E6533C] text-center w-10/12 -translate-y-20 mx-auto rounded-md ">
          <h3 className="text-4xl font-bold">Subscribe to our newsletter</h3>
          <div>
          <input className="p-[14px] rounded-full  border-none outline-none text-black" type="email" placeholder="Enter your email" />
          <Button style={{padding: "26.5px 20px", backgroundColor:'black',color:'white',fontWeight:'bold',}} className="bg-black text-white  rounded-full border-none -translate-x-14">Subscribe</Button>
          </div>
        </div>
        {/* NEWS LATER SECTION --------------------------------- */}

        {/* FOOTER SECTION --------------------------------- */}
      <div className="grid grid-cols-1 space-y-12 md:grid-cols-3 lg:grid-cols-4  lg:py-16 md:p-6 p-4">
        <div className="lg:px-6 space-y-6">
          <h1 className="lg:text-6xl text-4xl font-extrabold text-[#E6533C]">
            Fitness
          </h1>
          <p className="text-[#FFFFFF80]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            et beatae! Voluptas ipsam nostrum dicta expedita, repellat magni
            aspernatur. Eum.
          </p>
          <div>
            <div className="flex flex-col items-start justify-start pt-6 lg:pt-0">
              <div className="flex justify-center space-x-8">
                <InstagramFilled className="hover:text-[#E6533C] text-2xl" />
                <PinterestFilled className="hover:text-[#E6533C] text-2xl" />
                <FacebookFilled className="hover:text-[#E6533C] text-2xl" />
                <TwitterCircleFilled className="hover:text-[#E6533C] text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get Started</h3>
          <ul className="list-none text-[#FFFFFF80] space-y-4">
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get Started</h3>
          <ul className="list-none text-[#FFFFFF80] space-y-4">
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>About Us</li>
          </ul> 
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get Started</h3>
          <ul className="list-none text-[#FFFFFF80] space-y-4">
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>About Us</li>
          </ul> 
        </div>
      </div>

      <div className="container mx-auto text-center text-gray-400 p-2 border-t border-gray-400">
        {" "}
        &copy; All Right reserved by mehedi{" "}
      </div>
    </div>
    </div>
  );
};

export default Footer;
