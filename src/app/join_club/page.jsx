"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleFilled,
  StarFilled,
  FireFilled,
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
  TrophyFilled,
  ThunderboltFilled,
} from "@ant-design/icons";

const JoinClub = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const features = [
    {
      icon: <TrophyFilled className="text-3xl text-[#E6533C]" />,
      title: "Expert-Led Classes",
      description:
        "Access a vast library of live and on-demand classes led by world-class trainers.",
    },
    {
      icon: <HeartFilled className="text-3xl text-[#E6533C]" />,
      title: "Personalized Plans",
      description:
        "Get custom workout and nutrition plans that adapt to your goals and progress.",
    },
    {
      icon: <ThunderboltFilled className="text-3xl text-[#E6533C]" />,
      title: "Track Your Progress",
      description:
        "Use our advanced tools to monitor your achievements and stay motivated.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "29",
      popular: false,
      features: [
        "Access to basic workouts",
        "Community forum access",
        "Email support",
        "Progress tracking",
      ],
    },
    {
      name: "Pro",
      price: "49",
      popular: true,
      features: [
        "All Starter features",
        "Unlimited access to all classes",
        "Personalized nutrition plans",
        "Priority support",
        "Exclusive content",
      ],
    },
    {
      name: "Elite",
      price: "79",
      popular: false,
      features: [
        "All Pro features",
        "1-on-1 monthly coaching call",
        "Personalized form feedback",
        "Early access to new features",
        "Premium training gear",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "This platform completely changed my approach to fitness. The personalized plans are a game-changer!",
      name: "Jessica Miller",
      role: "Pro Member",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote:
        "The community is so supportive and the trainers are top-notch. I've never felt more motivated in my life.",
      name: "David Chen",
      role: "Elite Member",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my membership at any time?",
      answer:
        "Yes, you can cancel your membership at any time through your account settings. Your access will continue until the end of your current billing period.",
    },
    {
      question: "What equipment do I need?",
      answer:
        "Many of our workouts require no equipment at all! For others, we offer modifications. Some classes may recommend basic equipment like dumbbells or resistance bands.",
    },
    {
      question: "Are the nutrition plans customizable?",
      answer:
        "Absolutely. Our Pro and Elite plans offer fully customizable nutrition plans tailored to your dietary preferences, allergies, and fitness goals.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="https://images.unsplash.com/photo-1581009137042-c552e485697a?fit=crop&w=1920&q=80"
          alt="Fitness workout"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Start Your <span className="text-[#E6533C]">Legend</span> Today
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8"
          >
            Join a community of champions. Get personalized training, expert
            guidance, and the motivation you need to crush your goals.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="bg-[#E6533C] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Choose Your Plan
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We've built the ultimate platform to help you unlock your full
            potential.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div id="plans" className="py-20 px-4 bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Choose Your Path
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Select the plan that aligns with your ambition. No hidden fees,
            cancel anytime.
          </motion.p>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gray-800 p-8 rounded-xl border-2 ${
                  plan.popular ? "border-[#E6533C] relative" : "border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E6533C] text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-5xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <ul className="space-y-4 text-left mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircleFilled className="text-green-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-bold py-3 rounded-lg text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#E6533C] text-white hover:bg-red-600"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Sign Up Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12"
          >
            Hear From Our Members
          </motion.h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-left"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} />
                  ))}
                </div>
                <p className="text-xl italic text-gray-300 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-[#E6533C]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {activeFaq === index ? <MinusOutlined /> : <PlusOutlined />}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6"
                    >
                      <p className="pb-6 text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinClub;
