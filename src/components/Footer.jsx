import {
  FacebookFilled,
  InstagramFilled,
  PinterestFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222222] text-white">
      <div className="grid grid-cols-1 space-y-12 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-16">
        <div className="px-6 space-y-6">
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
      </div>

      <div className="container mx-auto text-center text-gray-400 p-2 border-t border-gray-400">
        {" "}
        &copy; All Right reserved by mehedi{" "}
      </div>
    </div>
  );
};

export default Footer;
