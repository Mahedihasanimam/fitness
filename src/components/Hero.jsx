"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import hero from "../../public/image/power-healthy-runner-handsome-lifestyle.png";
import Router from "next/router";

const Hero = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 5,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
        duration: 1,
      },
    },
    hover: {
      scale: 1.02,
      rotate: -1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 50,
    },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: delay,
        duration: 0.6,
      },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(230, 83, 60, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(230, 83, 60, 0.4)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 5px 15px rgba(230, 83, 60, 0.3)",
    },
  };

  return (
    <section className="relative pt-20 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white overflow-hidden  flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E6533C] rounded-full mix-blend-soft-light opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFFFFF] rounded-full mix-blend-soft-light opacity-5 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT HERO CONTENT */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left lg:max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              Get body in{" "}
              <motion.span
                className="italic bg-gradient-to-r pr-2 from-[#E6533C] to-[#FF7B4A] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                shape
              </motion.span>{" "}
              & stay healthy
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-[#FFFFFFA6] leading-relaxed mb-8"
              variants={itemVariants}
            >
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {/* Primary Button */}
              <motion.button
                onClick={() => (window.location.href = "/join_club")}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-10 py-4 bg-gradient-to-r from-[#E6533C] to-[#FF7B4A] text-white font-semibold text-lg rounded-full border-0 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Join Club Now!</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF7B4A] to-[#E6533C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-10 py-4 bg-transparent text-white font-semibold text-lg rounded-full border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Download App</span>
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </motion.div>

            {/* Stats Row for Mobile */}
            <motion.div
              className="flex justify-center lg:hidden gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E6533C]">
                  <CountUp end={500} duration={3} suffix="+" />
                </div>
                <div className="text-[#FFFFFFA6] text-sm mt-1">
                  Workout Videos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E6533C]">
                  <CountUp end={350} duration={3} suffix="+" />
                </div>
                <div className="text-[#FFFFFFA6] text-sm mt-1">
                  Video Tutorial
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT HERO IMAGE & STATS */}
          <motion.div
            className="relative lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#E6533C] to-[#FF7B4A] rounded-3xl opacity-20 blur-xl"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Image
                src={hero}
                alt="Fit person running"
                priority
                quality={100}
                className="relative z-10 object-contain max-w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={700}
              />

              {/* Stat Box 1: Free Workout Videos */}
              <motion.div
                className="absolute top-1/4 -right-4 lg:right-8 p-6 backdrop-blur-xl border border-[#FFFFFF20] bg-[#FFFFFF0D] rounded-2xl shadow-2xl min-w-[140px]"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                custom={0.8}
                whileHover="hover"
              >
                <h3 className="text-4xl lg:text-5xl font-black text-[#E6533C] mb-2">
                  <CountUp end={500} duration={3} suffix="+" />
                </h3>
                <p className="text-[#FFFFFFA6] font-medium text-sm lg:text-base">
                  Workout Videos
                </p>
              </motion.div>

              {/* Stat Box 2: Video Tutorial */}
              <motion.div
                className="absolute bottom-1/4 -left-4 lg:left-8 p-4 lg:p-6 backdrop-blur-xl bg-[#303030CC] border border-[#FFFFFF20] rounded-2xl shadow-2xl flex items-center gap-4 min-w-[160px]"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                custom={1.2}
                whileHover="hover"
              >
                <motion.div
                  className="h-12 w-12 bg-gradient-to-br from-[#E6533C] to-[#FF7B4A] rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                </motion.div>
                <div>
                  <h3 className="text-2xl lg:text-4xl font-black text-white">
                    <CountUp end={350} duration={3} suffix="+" />
                  </h3>
                  <p className="text-[#FFFFFFA6] font-medium text-xs lg:text-sm">
                    Video Tutorial
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Stats for Desktop */}
        <motion.div
          className="hidden lg:flex justify-center gap-12 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { number: 50, suffix: "k+", label: "Active Members" },
            { number: 100, suffix: "+", label: "Expert Trainers" },
            { number: 95, suffix: "%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-[#E6533C]">
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              </div>
              <div className="text-[#FFFFFFA6] text-lg mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
