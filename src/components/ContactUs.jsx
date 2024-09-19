import React from "react";
import "../app/globals.css";
import { Button } from "antd";

const ContactUs = () => {
  return (
    <div id="contact" className="relative parallax-bg h-[800px] flex items-center justify-center">
      <div className="relative z-10 p-10 rounded-lg  h-full  bg-black bg-opacity-75 w-full  ">
        <div className="lg:max-w-6xl md:max-w-6xl w-full mx-auto">
          <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold text-center text-[#E6533C]  mb-6 py-12 uppercase">
            Make a free trial
          </h2>
          <form className="space-y-4 w-full">
            <div className="lg:flex md:flex flex-row items-center justify-between gap-4 lg:space-y-0 md:space-y-0 space-y-4 ">
              <div className="w-full">
             
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-sm bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#E6533C]"
                />
              </div>
              <div className="w-full">
               
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-sm bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#E6533C]"
                />
              </div>
              <div className="w-full">
            
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-sm bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#E6533C]"
                />
              </div>
            </div>
            <div className="flex flex-col">

              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-sm bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#E6533C]"
                rows="5"
              ></textarea>
            </div>
           <div className="flex items-center justify-center ">
           <Button
          style={{border: "none",backgroundColor:'#E6533C',color:'white',padding:'30px 55px'}}
          size="large"
            rel="noopener noreferrer"
            
            className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-sm  "
          >
            Message  Now
          </Button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
