import Image from "next/image";
import React from "react";
import imageone from "../../public/image/image 2.png";
import { GithubFilled, LinkedinFilled, TwitchFilled } from "@ant-design/icons";
import trainer1 from "../../public/image/trainerone.png";
import trainer2 from "../../public/image/trainer3.png";
import trainer3 from "../../public/image/trainer4.png";
import trainer4 from "../../public/image/trainer5.png";




const Team = () => {
  return (
    <div id="trainers">
      <section className="py-6 bg-[#001118] text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
            {/* TEAM TITLE ---------------------------- */}
          <div className="space-y-4 text-[#FFFFFF80]">
            <h2 className="lg:text-6xl md:text-4xl text-3xl font-black  text-[#E6533C]  uppercase">
              Meet our trainers
            </h2>
            <p className="max-w-2xl text-gray-400">
              At a assumenda quas cum earum ut itaque commodi saepe rem
              aspernatur quam natus quis nihil quod, hic explicabo doloribus
              magnam neque, exercitationem eius sunt!
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-1">
            <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
              <Image
                alt="tam"
                className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
                src={trainer1}
              />
              <div className="flex flex-col bg-[#001118] rounded-lg p-4">
                <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Leroy Jenkins</h3>
                <h5 className="text-xl pb-4 font-bold ">Wellness Coach</h5>
                <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
                <div className="flex mt-4 space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Twitter"
                    className="text-gray-400"
                  >
                    <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="LinkedIn"
                    className="text-gray-400"
                  >
                   <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="GitHub"
                    className="text-gray-400 "
                  >
                   <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                </div>
              </div>
            </div>

            <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
              <Image
                alt="tam"
                className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
                src={trainer2}
              />
              <div className="flex flex-col bg-[#001118] rounded-lg p-4">
                <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Brandon Stark</h3>
                <h5 className="text-xl pb-4 font-bold ">Exercise Specialist</h5>
                <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
                <div className="flex mt-4 space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Twitter"
                    className="text-gray-400"
                  >
                    <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="LinkedIn"
                    className="text-gray-400"
                  >
                   <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="GitHub"
                    className="text-gray-400 "
                  >
                   <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                </div>
              </div>
            </div>
            <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
              <Image
                alt="tam"
                className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
                src={trainer4}
              />
              <div className="flex flex-col bg-[#001118] rounded-lg p-4">
                <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Derek Montgomery</h3>
                <h5 className="text-xl pb-4 font-bold ">Personal Training Specialist</h5>
                <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
                <div className="flex mt-4 space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Twitter"
                    className="text-gray-400"
                  >
                    <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="LinkedIn"
                    className="text-gray-400"
                  >
                   <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="GitHub"
                    className="text-gray-400 "
                  >
                   <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                </div>
              </div>
            </div>
            <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
              <Image
                alt="tam"
                className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
                src={trainer3}
              />
              <div className="flex flex-col bg-[#001118] rounded-lg p-4">
                <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Tyler O'Connor</h3>
                <h5 className="text-xl pb-4 font-bold ">Certified Fitness Trainer</h5>
                <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
                <div className="flex mt-4 space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Twitter"
                    className="text-gray-400"
                  >
                    <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="LinkedIn"
                    className="text-gray-400"
                  >
                   <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="GitHub"
                    className="text-gray-400 "
                  >
                   <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
