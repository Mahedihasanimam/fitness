"use client";

import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import hero from "../../public/image/power-healthy-runner-handsome-lifestyle.png";

const Hero2 = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-l pt-60 from-[#0b0b0b] via-[#333232] to-[#0b0b0b] text-white overflow-hidden">
      <div className="container flex flex-col justify-between mx-auto lg:flex-row lg:justify-between">
        {/* LEFT HERO CONTENT */}
        <motion.div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="lg:text-6xl text-4xl font-bold leading-none sm:text-[78px]"
            variants={itemVariants}
          >
            Get body in <span className="italic text-[#E6533C]">shape</span> &
            stay healthy
          </motion.h1>
          <motion.p
            className="mt-6 mb-8 text-lg sm:mb-12 text-[#FFFFFF80]"
            variants={itemVariants}
          >
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </motion.p>
          <motion.div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                style={{
                  border: "none",
                  backgroundColor: "#E6533C",
                  color: "white",
                  padding: "28px 50px", // Adjusted padding for better scaling
                  height: "44px",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                }}
              >
                Join Club Now!
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                style={{
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "28px 50px", // Adjusted padding for better scaling
                  height: "44px",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                }}
              >
                Download App
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT HERO IMAGE & STATS */}
        <motion.div
          className="flex items-center justify-center lg:mt-0 relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={hero}
            alt="Fit person running"
            priority // Load image faster as it's above the fold
            quality={100}
            className="object-contain h-full w-auto"
            width={600}
            height={700}
          />

          {/* Stat Box 1: Free Workout Videos */}
          <motion.div
            className="rounded-lg absolute top-1/4 right-5 p-4 backdrop-blur-md border border-[#FFFFFF1A] bg-[#FFFFFF1A] w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.8, duration: 0.5 },
            }}
          >
            <h3 className="lg:text-5xl text-4xl font-extrabold">
              <CountUp end={500} duration={3} suffix="+" />
            </h3>
            <p className="font-normal text-[#FFFFFFA6] capitalize text-base text-center">
              Workout Videos
            </p>
          </motion.div>

          {/* Stat Box 2: Video Tutorial */}
          <motion.div
            className="rounded-lg absolute lg:bottom-1/4 bottom-0 left-0 p-4 backdrop-blur-md bg-[#3030308A] w-fit flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1, duration: 0.5 },
            }}
          >
            <div className="h-12 w-12 bg-[#E6533C] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-extrabold">
                <CountUp end={350} duration={3} suffix="+" />
              </h3>
              <p className="font-normal text-[#FFFFFFA6] capitalize text-base">
                Video Tutorial
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
