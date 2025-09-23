import React, { useState } from "react";
import { motion } from "framer-motion";

const Membership = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#ff6b4a",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const toggleVariants = {
    active: {
      backgroundColor: "#E6533C",
      color: "#FFFFFF",
      transition: { duration: 0.3 },
    },
    inactive: {
      backgroundColor: "transparent",
      color: "#FFFFFF80",
      transition: { duration: 0.3 },
    },
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      monthlyPrice: "$60",
      annualPrice: "$600",
      features: [
        "Access to all gym equipment",
        "One group fitness class per week",
        "Locker room access",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Professional",
      monthlyPrice: "$120",
      annualPrice: "$1200",
      features: [
        "All Basic features included",
        "Unlimited group fitness classes",
        "Personal trainer (1 session per month)",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      monthlyPrice: "$200",
      annualPrice: "$2000",
      features: [
        "All Professional features included",
        "Unlimited personal trainer sessions",
        "VIP locker room and towel service",
      ],
      isPopular: false,
    },
  ];

  return (
    <div id="membership">
      <section className="py-6 bg-gray-800 text-gray-100">
        <div className="container p-4 mx-auto sm:p-10">
          {/* PRICING TITLE --------------------------- */}
          <motion.div
            className="mb-12 space-y-4 max-w-2xl text-[#FFFFFF80]"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="lg:text-6xl md:text-4xl text-3xl font-black text-[#E6533C] uppercase"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              Pricing tables
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose the perfect plan that fits your fitness goals. All plans
              include access to our state-of-the-art facilities and expert
              guidance.
            </motion.p>
            <motion.div
              className="flex mt-8"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="px-6 py-3 font-semibold border rounded-l-lg border-[#E6533C]"
                variants={toggleVariants}
                animate={isMonthly ? "active" : "inactive"}
                onClick={() => setIsMonthly(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Monthly
              </motion.button>
              <motion.button
                className="px-6 py-3 border rounded-r-lg border-[#E6533C]"
                variants={toggleVariants}
                animate={!isMonthly ? "active" : "inactive"}
                onClick={() => setIsMonthly(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Annually
                <span className="ml-2 text-sm text-green-400">Save 20%</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* PRICING CARDS --------------------------- */}
          <motion.div
            className="grid max-w-md grid-cols-1 gap-8 mx-auto auto-rows-fr lg:grid-cols-3 md:grid-cols-2 w-full lg:max-w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`flex flex-col overflow-hidden border-2 rounded-xl relative ${
                  plan.isPopular
                    ? "border-[#E6533C] shadow-2xl shadow-[#E6533C]/20"
                    : "border-gray-700 hover:border-[#E6533C]"
                } transition-all duration-300`}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(plan.id)}
                onHoverEnd={() => setHoveredCard(null)}
                custom={index}
              >
                {plan.isPopular && (
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  >
                    <span className="px-4 py-1 text-sm font-bold bg-[#E6533C] text-white rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </motion.div>
                )}

                {/* Card Header */}
                <motion.div
                  className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gradient-to-br from-gray-800 to-gray-900"
                  whileHover={{ backgroundColor: "rgba(230, 83, 60, 0.1)" }}
                >
                  <p className="text-xl font-semibold uppercase tracking-wide">
                    {plan.name}
                  </p>
                  <motion.p
                    className="text-5xl font-bold"
                    key={isMonthly ? "monthly" : "annual"}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {isMonthly ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-xl text-gray-400">
                      /{isMonthly ? "mo" : "yr"}
                    </span>
                  </motion.p>
                </motion.div>

                {/* Card Body */}
                <motion.div
                  className="flex flex-col items-center justify-center px-2 py-8 bg-gradient-to-br from-gray-900 to-gray-800 flex-1"
                  whileHover={{ backgroundColor: "rgba(230, 83, 60, 0.05)" }}
                >
                  <ul className="self-stretch w-fit mx-auto flex-1 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex justify-start space-x-3 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-[#E6533C] flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </motion.svg>
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="px-8 py-3 mt-8 text-lg font-semibold rounded-lg bg-gradient-to-r from-[#E6533C] to-[#ff6b4a] text-white shadow-lg w-full max-w-xs"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Sign up now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400">
              All plans include a 30-day money-back guarantee. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
