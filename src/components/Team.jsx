// import Image from "next/image";
// import React from "react";
// import imageone from "../../public/image/image 2.png";
// import { GithubFilled, LinkedinFilled, TwitchFilled } from "@ant-design/icons";
// import trainer1 from "../../public/image/trainerone.png";
// import trainer2 from "../../public/image/trainer3.png";
// import trainer3 from "../../public/image/trainer4.png";
// import trainer4 from "../../public/image/trainer5.png";

// const Team = () => {
//   return (
//     <div id="trainers">
//       <section className="py-6 bg-[#001118] text-gray-100">
//         <div className="container p-4 mx-auto space-y-16 sm:p-10">
//             {/* TEAM TITLE ---------------------------- */}
//           <div className="space-y-4 text-[#FFFFFF80]">
//             <h2 className="lg:text-6xl md:text-4xl text-3xl font-black  text-[#E6533C]  uppercase">
//               Meet our trainers
//             </h2>
//             <p className="max-w-2xl text-gray-400">
//               At a assumenda quas cum earum ut itaque commodi saepe rem
//               aspernatur quam natus quis nihil quod, hic explicabo doloribus
//               magnam neque, exercitationem eius sunt!
//             </p>
//           </div>

//           <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-1">
//             <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
//               <Image
//                 alt="tam"
//                 className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
//                 src={trainer1}
//               />
//               <div className="flex flex-col bg-[#001118] rounded-lg p-4">
//                 <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Leroy Jenkins</h3>
//                 <h5 className="text-xl pb-4 font-bold ">Wellness Coach</h5>
//                 <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
//                 <div className="flex mt-4 space-x-1">
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="Twitter"
//                     className="text-gray-400"
//                   >
//                     <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="LinkedIn"
//                     className="text-gray-400"
//                   >
//                    <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="GitHub"
//                     className="text-gray-400 "
//                   >
//                    <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
//               <Image
//                 alt="tam"
//                 className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
//                 src={trainer2}
//               />
//               <div className="flex flex-col bg-[#001118] rounded-lg p-4">
//                 <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Brandon Stark</h3>
//                 <h5 className="text-xl pb-4 font-bold ">Exercise Specialist</h5>
//                 <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
//                 <div className="flex mt-4 space-x-1">
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="Twitter"
//                     className="text-gray-400"
//                   >
//                     <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="LinkedIn"
//                     className="text-gray-400"
//                   >
//                    <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="GitHub"
//                     className="text-gray-400 "
//                   >
//                    <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
//               <Image
//                 alt="tam"
//                 className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
//                 src={trainer4}
//               />
//               <div className="flex flex-col bg-[#001118] rounded-lg p-4">
//                 <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Derek Montgomery</h3>
//                 <h5 className="text-xl pb-4 font-bold ">Personal Training Specialist</h5>
//                 <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
//                 <div className="flex mt-4 space-x-1">
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="Twitter"
//                     className="text-gray-400"
//                   >
//                     <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="LinkedIn"
//                     className="text-gray-400"
//                   >
//                    <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="GitHub"
//                     className="text-gray-400 "
//                   >
//                    <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div  className="lg:flex flex-row space-x-6 border-2 border-gray-500  hover:shadow-[#E6533C] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg cursor-pointer">
//               <Image
//                 alt="tam"
//                 className=" h-[400px] w-[400px]  bg-transparent hover:bg-gradient-to-r hover:from-[#E6533C] hover:to-[#001118] transition-all duration-500 ease-in-out bg-black rounded-lg"
//                 src={trainer3}
//               />
//               <div className="flex flex-col bg-[#001118] rounded-lg p-4">
//                 <h3 className="text-4xl font-semibold capitalize text-[#E6533C] pb-2 ">Tyler O'Connor</h3>
//                 <h5 className="text-xl pb-4 font-bold ">Certified Fitness Trainer</h5>
//                 <p className="text-sm text-gray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quos, ea sed cupiditate obcaecati sapiente ipsam soluta consequuntur dignissimos blanditiis delectus quo perspiciatis esse magni assumenda fugit quasi distinctio.</p>
//                 <div className="flex mt-4 space-x-1">
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="Twitter"
//                     className="text-gray-400"
//                   >
//                     <TwitchFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="LinkedIn"
//                     className="text-gray-400"
//                   >
//                    <LinkedinFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                   <a
//                     rel="noopener noreferrer"
//                     href="#"
//                     title="GitHub"
//                     className="text-gray-400 "
//                   >
//                    <GithubFilled className="hover:text-white hover:bg-[#E6533C] hover:scale-105 p-2 bg-gray-400 text-white text-xl rounded-sm transition-all duration-300 ease-in-out " />
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Team;

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GithubFilled, LinkedinFilled, TwitchFilled } from "@ant-design/icons";
import trainer1 from "../../public/image/trainerone.png";
import trainer2 from "../../public/image/trainer3.png";
import trainer3 from "../../public/image/trainer4.png";
import trainer4 from "../../public/image/trainer5.png";
import Router from "next/router";
import Link from "next/link";

const Team = () => {
  const [hoveredTrainer, setHoveredTrainer] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.7,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(230, 83, 60, 0.25)",
      borderColor: "#E6533C",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#E6533C",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const trainers = [
    {
      id: 1,
      name: "Leroy Jenkins",
      title: "Wellness Coach",
      image: trainer1,
      description:
        "Specialized in holistic wellness and lifestyle coaching. With 8+ years of experience, Leroy helps clients achieve balance through customized fitness and nutrition plans.",
      specialties: ["Yoga", "Meditation", "Nutrition"],
      social: {
        twitch: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Brandon Stark",
      title: "Exercise Specialist",
      image: trainer2,
      description:
        "Expert in functional training and sports performance. Brandon's innovative approaches have helped athletes reach peak performance levels.",
      specialties: [
        "Strength Training",
        "Athletic Performance",
        "Rehabilitation",
      ],
      social: {
        twitch: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Derek Montgomery",
      title: "Personal Training Specialist",
      image: trainer4,
      description:
        "Certified personal trainer with a passion for transforming lives. Derek creates personalized programs that deliver sustainable results.",
      specialties: ["Weight Loss", "Bodybuilding", "Custom Programs"],
      social: {
        twitch: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Tyler O'Connor",
      title: "Certified Fitness Trainer",
      image: trainer3,
      description:
        "Group fitness enthusiast with energy that's contagious. Tyler's dynamic classes motivate clients to push beyond their limits.",
      specialties: ["Group Classes", "HIIT", "Cardio Training"],
      social: {
        twitch: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <div id="trainers">
      <section className="py-20 bg-gradient-to-br from-[#001118] to-[#0a1a22] text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          {/* TEAM TITLE ---------------------------- */}
          <motion.div
            className="space-y-6 text-center"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="lg:text-6xl md:text-4xl text-3xl font-black text-[#E6533C] uppercase tracking-wide"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              Meet Our Expert Trainers
            </motion.h2>
            <motion.p
              className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our certified fitness professionals are dedicated to helping you
              achieve your goals. With diverse expertise and personalized
              approaches, they'll guide you every step of the way.
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#E6533C] to-[#ff6b4a] mx-auto rounded-full"
              whileInView={{ width: "100px" }}
              initial={{ width: "0px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {/* TRAINERS GRID ---------------------------- */}
          <motion.div
            className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2 lg:grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trainers.map((trainer, index) => (
              <Link href={`/session-booking`}>
                <motion.div
                  key={trainer.id}
                  className="group  relative flex flex-col lg:flex-row border-2 border-gray-700 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm"
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredTrainer(trainer.id)}
                  onHoverEnd={() => setHoveredTrainer(null)}
                  custom={index}
                >
                  {/* Image Container */}
                  <motion.div
                    className="relative lg:w-2/5 overflow-hidden"
                    variants={imageVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E6533C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                      alt={trainer.name}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={trainer.image}
                      placeholder="blur"
                    />
                    {/* Specialties Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {trainer.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-[#E6533C] text-white rounded-full backdrop-blur-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Content Container */}
                  <motion.div
                    className="flex flex-col justify-center lg:w-3/5 p-6 lg:p-8"
                    variants={contentVariants}
                  >
                    <motion.h3
                      className="text-3xl lg:text-4xl font-bold capitalize text-[#E6533C] mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {trainer.name}
                    </motion.h3>
                    <motion.h5
                      className="text-xl lg:text-2xl font-semibold text-white mb-4"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        delay: 0.1,
                      }}
                    >
                      {trainer.title}
                    </motion.h5>
                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {trainer.description}
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                      className="flex space-x-3 mt-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <motion.a
                        rel="noopener noreferrer"
                        href={trainer.social.twitch}
                        title="Twitch"
                        className="text-gray-400"
                        variants={socialIconVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <TwitchFilled className="p-3 bg-gray-700/50 text-white text-xl rounded-lg backdrop-blur-sm transition-colors duration-300" />
                      </motion.a>
                      <motion.a
                        rel="noopener noreferrer"
                        href={trainer.social.linkedin}
                        title="LinkedIn"
                        className="text-gray-400"
                        variants={socialIconVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <LinkedinFilled className="p-3 bg-gray-700/50 text-white text-xl rounded-lg backdrop-blur-sm transition-colors duration-300" />
                      </motion.a>
                      <motion.a
                        rel="noopener noreferrer"
                        href={trainer.social.github}
                        title="GitHub"
                        className="text-gray-400"
                        variants={socialIconVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <GithubFilled className="p-3 bg-gray-700/50 text-white text-xl rounded-lg backdrop-blur-sm transition-colors duration-300" />
                      </motion.a>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className="mt-6 cursor-pointer px-6 py-3 bg-gradient-to-r from-[#E6533C] to-[#ff6b4a] text-white font-semibold rounded-lg shadow-lg w-full max-w-xs mx-auto lg:mx-0"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px -10px rgba(230, 83, 60, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Book Session
                    </motion.button>
                  </motion.div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E6533C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-xl text-gray-300 mb-6"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Ready to start your fitness journey with our expert team?
            </motion.p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#E6533C] to-[#ff6b4a] text-white font-bold rounded-full text-lg shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(230, 83, 60, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
