import Image from "next/image";
import React from "react";
import image1 from "../../../public/image/couple-training-together-gym.jpg";
import image2 from "../../../public/image/pushup.jpg";
import image3 from "../../../public/image/phsical2.jpg";

import image4 from "../../../public/image/gym3.jpg";
import image5 from "../../../public/image/gym4.jpg";
import image6 from "../../../public/image/pushup.jpg";
import girltrainer from '../../../public/image/girltrainer.jpg'
import girltrainer2 from '../../../public/image/girltrainer3.png'
const TrainingAndExersize = () => {
  return (
    <div className="bg-[#001118] text-white p-2 pb-40">
      <div className="container mx-auto py-12">
        <div className=" space-y-4 max-w-2xl my-6">
          <h3 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
            Trainings and Exercises
          </h3>
          <p className="text-[#FFFFFF80]">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="relative group col-span-12 lg:col-span-3">
              <div className="h-full w-full absolute bg-[#06FFD280]  opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <h3 className="p-4 text-white font-bold text-2xl">
                    Couple Training Together
                </h3>
              </div>
              <Image
                src={image3}
                className="w-full  border-2 border-[#4a4b4b80]"
                alt="Fitness"
              />
            </div>
            <div className="relative group">
              <div className="h-full w-full absolute bg-[#FF00004D]  opacity-50 transition-opacity duration-300">
              <div>
                <h3 className="p-4 text-white font-bold text-2xl">Push-ups</h3>
              </div>
              </div>
              <Image
                src={image2}
                className="w-full h-full  border-2 border-[#4a4b4b80]"
            
                alt="Fitness"
              />
            </div>
            <div className="relative group">
              <div className="h-full w-full absolute bg-[#00000080]  opacity-50 transition-opacity duration-300">
       
              </div>
              <Image
                src={image1}
                className="w-full  border-2 border-[#4a4b4b80]"
                alt="Fitness"
              />
            </div>
            <div className="relative group">
              <div className="h-full w-full absolute bg-[#42FF004D]  opacity-50 transition-opacity duration-300">
                <h3 className="p-4 text-white font-bold text-2xl">
                    Gym Classes
                </h3>
              </div>
              <Image
                src={image4}
                className="w-full  border-2 border-[#4a4b4b80]"
                alt="Fitness"
              />
            </div>
            <div className="relative group">
              <div className="h-full w-full absolute bg-[#000]  opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                   <h3 className="p-4 text-white font-bold text-2xl">
                    Gym Classes
                   </h3>
              </div>
              <Image
                src={girltrainer2}
                className="w-full h-full  border-2 bg-gradient-to-t from-[#E6533C] to-black border-[#4a4b4b80]"
                alt="Fitness"
              />
            </div>
            <div className="relative group col-span-2">
              <div className="h-full w-full absolute bg-[#FF00004D]  opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <div>
                <h3 className="p-4 text-white font-bold text-2xl">Push-ups</h3>
              </div>
              </div>
              <Image
                src={image5}
                className="w-full h-full  border-2 border-[#4a4b4b80]"
            
                alt="Fitness"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingAndExersize;
