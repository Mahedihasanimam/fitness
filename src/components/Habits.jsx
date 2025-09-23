"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(230, 83, 60, 0.15)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      damping: 10,
    },
  },
};

const Habits = () => {
  const cards = [
    {
      id: 1,
      title: "Movement",
      text: "Transform your daily routine with personalized movement strategies that fit your lifestyle.",
      image: "https://placehold.co/144x144/2f2f2f/E6533C?text=Fit",
      accentColor: "#E6533C",
    },
    {
      id: 2,
      title: "Time",
      text: "Efficient workout plans designed for busy schedules. Maximum results in minimal time.",
      image: "https://placehold.co/144x144/2f2f2f/FFFFFF?text=Time",
      accentColor: "#FFFFFF",
    },
    {
      id: 3,
      title: "Practice",
      text: "Consistent practice routines that build lasting habits and sustainable fitness progress.",
      image: "https://placehold.co/144x144/2f2f2f/E6533C?text=Practice",
      accentColor: "#E6533C",
    },
    {
      id: 4,
      title: "Weight Loss",
      text: "Science-backed approaches to healthy weight management and metabolic improvement.",
      image: "https://placehold.co/144x144/2f2f2f/FFFFFF?text=Healthy",
      accentColor: "#FFFFFF",
    },
  ];

  return (
    <div className="bg-[#001118] text-white  flex items-center py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1
            variants={titleVariants}
            className="font-bold pb-6 lg:text-6xl md:text-4xl text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Transform Your Habits
          </motion.h1>
          <motion.p
            variants={subtitleVariants}
            className="text-[#FFFFFF80] text-lg md:text-xl leading-relaxed"
          >
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. Start your journey today.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-gradient-to-br from-[#001118] to-[#0A1F25] border border-[#FFFFFF15] rounded-2xl p-6 cursor-pointer overflow-hidden"
              style={{
                borderBottomColor: card.accentColor,
                borderRightColor: card.accentColor,
              }}
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-[#E6533C10] group-hover:to-[#E6533C05] transition-all duration-500 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Image Container */}
                <motion.div
                  className="avatar inline-block mb-6"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="w-32 h-32 rounded-full border-4 border-[#2f2f2f] group-hover:border-[#E6533C] transition-colors duration-300 overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="text-center">
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-[#E6533C] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.title}
                  </motion.h3>
                  <p className="text-[#FFFFFF80] text-sm leading-relaxed group-hover:text-[#FFFFFFAA] transition-colors duration-300">
                    {card.text}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#E6533C] to-transparent group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-[#E6533C] to-[#FF7B4A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(230, 83, 60, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Habits;
