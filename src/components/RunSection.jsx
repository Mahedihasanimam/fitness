"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../public/image/Rectangle 22.png";

const RunSection = () => {
  // Animation variants
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

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      x: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
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
      scale: 1.1,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
        duration: 1,
      },
    },
    hover: {
      scale: 1.05,
      rotate: -2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(230, 83, 60, 0.3)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 40px rgba(230, 83, 60, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 5px 15px rgba(230, 83, 60, 0.4)",
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-[#001118]  p-6 pb-16">
      <motion.div
        className="relative bg-gradient-to-br from-[#222222] to-[#1A1A1A] text-white rounded-3xl container mx-auto p-8 lg:p-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-[#E6533C] rounded-full mix-blend-soft-light opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#E6533C] rounded-full mix-blend-soft-light opacity-10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(230,83,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,83,60,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div className="lg:max-w-lg w-full" variants={textVariants}>
            <motion.h1
              className="lg:text-7xl md:text-6xl text-4xl font-black leading-tight mb-6"
              variants={textVariants}
            >
              Run an{" "}
              <motion.span
                className="italic pr-2 bg-gradient-to-r from-[#E6533C] to-[#FF7B4A] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Extra Mile
              </motion.span>{" "}
              Easily
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#FFFFFFA6] leading-relaxed mb-8"
              variants={textVariants}
            >
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, personalized training plans, and expert
              guidance.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-12 py-4 bg-gradient-to-r from-[#E6533C] to-[#FF7B4A] text-white font-semibold text-lg rounded-full border-0 relative overflow-hidden group"
              >
                <span className="relative z-10">Join Now!</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF7B4A] to-[#E6533C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>

              {/* Additional Stats */}
              <motion.div
                className="flex gap-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <div className="text-2xl font-bold text-[#E6533C]">500+</div>
                  <div className="text-[#FFFFFFA6] text-sm">Workouts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#E6533C]">10K+</div>
                  <div className="text-[#FFFFFFA6] text-sm">Members</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Features List */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: "🏃", text: "Personalized Plans" },
                { icon: "📊", text: "Progress Tracking" },
                { icon: "👥", text: "Expert Trainers" },
                { icon: "🎯", text: "Real Results" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3 text-[#FFFFFFA6] hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative w-full lg:w-auto"
            variants={imageVariants}
            whileHover="hover"
          >
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

            <div className="relative">
              <Image
                className="rounded-2xl shadow-2xl object-cover w-full max-w-md lg:max-w-lg mx-auto"
                src={image1}
                alt="Runner achieving extra mile easily"
                width={500}
                height={400}
                priority
              />

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#E6533C] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                variants={floatingVariants}
                animate="float"
              >
                🏆 #1 Choice
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white text-[#E6533C] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 1 }}
              >
                ⚡ Fast Results
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient border effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#E6533C] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default RunSection;
