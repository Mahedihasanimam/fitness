import Image from "next/image";
import React from "react";
import image from "../../public/image/Rectangle 22.png";
const Mycard = () => {
  return (
    <div className="bg-[#001118] py-20">
      <div className="bg-[#222222] text-white rounded-lg container mx-auto p-12 flex items-center justify-between gap-8">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">Run an Extra Mile Easily</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]">
          We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
          </p>
          <a
            rel="noopener noreferrer"
            
            className="px-24 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-full"
          >
            Join Now!
          </a>
        </div>
        <div>
          <Image height={0} width={0} src={image}/>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
