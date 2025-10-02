import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../public/image/couple-training-together-gym.jpg";
import image2 from "../../../public/image/pushup.jpg";
import image3 from "../../../public/image/phsical2.jpg";
import image4 from "../../../public/image/gym3.jpg";
import image5 from "../../../public/image/gym4.jpg";
import girltrainer2 from "../../../public/image/girltrainer3.png";

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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const textVariants = {
  initial: { y: 20, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3 },
  },
};

const TrainingAndExercise = () => {
  return (
    <div id="training" className="bg-[#001118] text-white p-2">
      <div className="container mx-auto pb-12">
        <motion.div
          className="space-y-4 max-w-2xl my-6 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3
            className="lg:text-6xl md:text-4xl text-3xl font-bold text-white"
            variants={itemVariants}
          >
            Trainings and <span className="text-[#E6533C]">Exercises</span>
          </motion.h3>
          <motion.p
            className="text-[#FFFFFF80] text-lg leading-relaxed"
            variants={itemVariants}
          >
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Main Featured Image */}
            <motion.div
              className="relative group col-span-3 lg:col-span-3 rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#E6533C] via-transparent to-transparent z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute bottom-0 left-0 p-6 z-20"
                variants={textVariants}
              >
                <h3 className="text-white font-bold text-3xl mb-2">
                  Couple Training Together
                </h3>
                <p className="text-[#FFFFFFCC]">Build strength together</p>
              </motion.div>
              <motion.div
                variants={imageHoverVariants}
                className="w-full h-full"
              >
                <Image
                  src={image3}
                  className="w-full h-[400px] object-cover"
                  alt="Couple training together in gym"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Push-ups Image */}
            <motion.div
              className="relative group rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-[#E6533C] bg-opacity-80 z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                variants={textVariants}
              >
                <h3 className="text-white font-bold text-2xl text-center">
                  Push-ups
                </h3>
              </motion.div>
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={image2}
                  className="w-full h-[300px] object-cover"
                  alt="Person doing push-ups"
                />
              </motion.div>
            </motion.div>

            {/* Gym Training */}
            <motion.div
              className="relative group rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute inset-0 flex items-end p-4 z-20"
                variants={textVariants}
              >
                <h3 className="text-white font-bold text-xl">
                  Strength Training
                </h3>
              </motion.div>
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={image1}
                  className="w-full h-[300px] object-cover"
                  alt="Gym training session"
                />
              </motion.div>
            </motion.div>

            {/* Gym Classes */}
            <motion.div
              className="relative group rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#E6533C] to-transparent z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute top-4 left-4 z-20"
                variants={textVariants}
              >
                <span className="bg-[#E6533C] text-white px-3 py-1 rounded-full text-sm font-medium">
                  New Class
                </span>
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 z-20"
                variants={textVariants}
              >
                <h3 className="text-white font-bold text-2xl">Gym Classes</h3>
              </motion.div>
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={image4}
                  className="w-full h-[300px] object-cover"
                  alt="Gym class session"
                />
              </motion.div>
            </motion.div>

            {/* Female Trainer */}
            <motion.div
              className="relative group rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute bottom-4 left-4 z-20"
                variants={textVariants}
              >
                <h3 className="text-white font-bold text-2xl">
                  Professional Trainer
                </h3>
                <p className="text-[#E6533C] font-medium">Certified Expert</p>
              </motion.div>
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={girltrainer2}
                  className="w-full h-[300px] object-cover"
                  alt="Female gym trainer"
                />
              </motion.div>
            </motion.div>

            {/* Wide Image */}
            <motion.div
              className="relative group col-span-2 rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-[#E6533C] bg-opacity-70 z-10"
                variants={overlayVariants}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                variants={textVariants}
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-3xl mb-2">
                    Advanced Workouts
                  </h3>
                  <p className="text-white opacity-90">
                    Take your fitness to the next level
                  </p>
                </div>
              </motion.div>
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={image5}
                  className="w-full h-[300px] object-cover"
                  alt="Advanced workout session"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            onClick={() => (window.location.href = "/join_club")}
            className="bg-[#E6533C] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d44a34] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Programs
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingAndExercise;
