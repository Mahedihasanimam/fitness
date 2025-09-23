"use client";
import {
  FacebookFilled,
  InstagramFilled,
  PinterestFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const iconHover = {
  scale: 1.2,
  color: "#E6533C",
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const Footer = () => {
  return (
    <motion.div
      className="bg-[#222222] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        {/* NEWSLETTER SECTION --------------------------------- */}
        <motion.div
          className="lg:flex hidden items-center justify-between p-12 bg-[#E6533C] text-center w-10/12 relative z-50 -translate-y-20 mx-auto rounded-md shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: -20, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{
            y: -25,
            boxShadow: "0 20px 40px rgba(230, 83, 60, 0.3)",
          }}
        >
          <motion.h3
            className="text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            Subscribe to our newsletter
          </motion.h3>
          <div className="flex items-center justify-between">
            <motion.input
              className="p-[14px] rounded-full border-none outline-none text-black w-80"
              type="email"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #222222" }}
            />
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                style={{
                  padding: "26.5px 20px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bold",
                }}
                className="rounded-full border-none -translate-x-14"
              >
                Subscribe
              </Button>
            </motion.div>
          </div>
        </motion.div>
        {/* NEWSLETTER SECTION --------------------------------- */}

        {/* FOOTER SECTION --------------------------------- */}
        <motion.div
          className="grid grid-cols-1 space-y-12 md:grid-cols-3 lg:grid-cols-4 lg:py-16 md:p-6 p-4"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div className="lg:px-6 space-y-6" variants={itemVariants}>
            <motion.h1
              className="lg:text-6xl text-4xl font-extrabold text-[#E6533C]"
              whileHover={{ scale: 1.05 }}
            >
              Fitness
            </motion.h1>
            <motion.p
              className="text-[#FFFFFF80] leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, et beatae! Voluptas ipsam nostrum dicta expedita,
              repellat magni aspernatur. Eum.
            </motion.p>
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-start justify-start pt-6 lg:pt-0">
                <div className="flex justify-center space-x-6">
                  <motion.div whileHover={iconHover} whileTap={{ scale: 0.9 }}>
                    <InstagramFilled className="text-2xl cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={iconHover} whileTap={{ scale: 0.9 }}>
                    <PinterestFilled className="text-2xl cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={iconHover} whileTap={{ scale: 0.9 }}>
                    <FacebookFilled className="text-2xl cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={iconHover} whileTap={{ scale: 0.9 }}>
                    <TwitterCircleFilled className="text-2xl cursor-pointer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {[1, 2, 3].map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.h3
                className="text-lg font-bold mb-6"
                whileHover={{ color: "#E6533C" }}
              >
                {index === 0
                  ? "Quick Links"
                  : index === 1
                  ? "Resources"
                  : "Company"}
              </motion.h3>
              <ul className="list-none text-[#FFFFFF80] space-y-4">
                {["Service", "Contact Us", "Affiliate Program", "About Us"].map(
                  (item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                      whileHover={{ x: 5, color: "#E6533C" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="container mx-auto text-center text-gray-400 p-6 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p whileHover={{ scale: 1.02, color: "#FFFFFF" }}>
            &copy; 2025 Fitness Template. Developed by Mehedi Hasan.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
