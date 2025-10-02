// Add this to the top of the file for client-side interactivity
"use client";

import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  CheckCircle,
  Dumbbell,
  Wind,
  Coffee,
} from "lucide-react";

// Reusable animation variants from the previous page for consistency
const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
  viewport: { once: true },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

// Placeholder data for the team section
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Head Coach",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image
    bio: "With over 15 years of experience, Alex founded this gym to create a space where everyone feels empowered.",
  },
  {
    name: "Jane Doe",
    role: "Lead Yoga Instructor",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image
    bio: "Jane specializes in Vinyasa and restorative yoga, helping members find balance between mind and body.",
  },
  {
    name: "Mike Williams",
    role: "Strength & Conditioning Expert",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image
    bio: "A former athlete, Mike is passionate about helping clients break their personal records safely.",
  },
];

// Placeholder data for the facility features
const facilityFeatures = [
  {
    icon: <Dumbbell className="h-8 w-8 text-[#E6533C]" />,
    title: "Premium Equipment",
    description:
      "State-of-the-art machines and free weights for all your training needs.",
  },
  {
    icon: <Wind className="h-8 w-8 text-[#E6533C]" />,
    title: "Spacious & Ventilated",
    description:
      "A clean, open-plan layout with excellent air circulation for a comfortable workout.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#E6533C]" />,
    title: "Hygienic Facilities",
    description:
      "Immaculate changing rooms, showers, and sanitized workout stations.",
  },
  {
    icon: <Coffee className="h-8 w-8 text-[#E6533C]" />,
    title: "Recovery Lounge",
    description:
      "A dedicated space to relax, refuel with a protein shake, and connect with others.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#001118] text-gray-200">
      {/* Hero Section */}
      <motion.section
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-lg font-semibold text-[#E6533C] mb-2"
          {...fadeInAnimation}
        >
          ABOUT US
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          Forging Stronger Bodies, Building Our Community
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl text-gray-400"
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        >
          We're more than just a gym; we are a dedicated community committed to
          helping you become the best version of yourself.
        </motion.p>
      </motion.section>

      {/* Our Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInAnimation}>
            <p className="text-[#E6533C] font-bold mb-2">OUR STORY</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From a Simple Idea to a Fitness Haven
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our journey began with a simple mission: to create a fitness space
              that feels like a second home. A place free of judgment, full of
              encouragement, and equipped with everything you need to succeed.
              We saw a need for a gym that focused not just on lifting weights,
              but on lifting spirits. Today, we are proud to be a cornerstone of
              the community, helping people transform their lives one workout at
              a time.
            </p>
          </motion.div>
          <motion.div
            className="h-80 bg-gray-700 rounded-lg flex items-center justify-center"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            {/* Replace this div with your Next.js <Image> component */}
            <p className="text-gray-400">Image of the gym interior</p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 px-4 bg-[#001f2b]/50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12"
            {...fadeInAnimation}
          >
            Our Guiding <span className="text-[#E6533C]">Principles</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="flex flex-col items-center"
              {...fadeInAnimation}
              transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
            >
              <Target className="h-12 w-12 text-[#E6533C] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-400">
                Your goals are our blueprint. We provide personalized plans and
                support to ensure you see real, measurable progress.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              {...fadeInAnimation}
              transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
            >
              <Heart className="h-12 w-12 text-[#E6533C] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Holistic Health</h3>
              <p className="text-gray-400">
                We believe true fitness encompasses mind and body. Our approach
                integrates training, nutrition, and wellness.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              {...fadeInAnimation}
              transition={{ ...fadeInAnimation.transition, delay: 0.6 }}
            >
              <Users className="h-12 w-12 text-[#E6533C] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Community-Focused</h3>
              <p className="text-gray-400">
                We foster a supportive, inclusive environment where members
                motivate and celebrate each other.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12"
            {...fadeInAnimation}
          >
            Meet The <span className="text-[#E6533C]">Team</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-[#001f2b] text-center p-6 rounded-lg border border-gray-700/50"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 10px 20px rgba(230, 83, 60, 0.1)",
                }}
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-700 overflow-hidden">
                  {/* Replace with <Image> component */}
                  {/* <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" /> */}
                </div>
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-[#E6533C] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-20 px-4 bg-[#001f2b]/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="h-96 bg-gray-700 rounded-lg flex items-center justify-center order-last md:order-first"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            <p className="text-gray-400">Image gallery or video</p>
          </motion.div>
          <motion.div {...fadeInAnimation}>
            <p className="text-[#E6533C] font-bold mb-2">OUR FACILITY</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engineered for Excellence
            </h2>
            <div className="space-y-6">
              {facilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            {...fadeInAnimation}
          >
            Become Part of Our Story
          </motion.h2>
          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-400"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            Your best workout is one click away. Visit us to take a tour and
            experience the difference firsthand.
          </motion.p>
          <motion.div
            className="mt-8"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
          >
            <motion.button
              className="bg-[#E6533C] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Tour
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
