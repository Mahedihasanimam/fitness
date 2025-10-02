// // Make sure to use this at the top of the file in Next.js App Router
// "use client";

// import { motion } from "framer-motion";
// import {
//   Dumbbell,
//   Users,
//   HeartPulse,
//   Salad,
//   ShieldCheck,
//   Zap,
//   Award,
//   Sun,
// } from "lucide-react";

// // Reusable animation variants
// const fadeInAnimation = {
//   initial: { opacity: 0, y: 50 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeInOut" },
//   viewport: { once: true },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1 },
// };

// const services = [
//   {
//     icon: <Dumbbell className="h-10 w-10 text-[#E6533C]" />,
//     title: "Personal Training",
//     description:
//       "আপনার ফিটনেস লক্ষ্য দ্রুত এবং কার্যকরভাবে অর্জন করতে আমাদের সার্টিফাইড ট্রেইনারদের সাথে ওয়ান-অন-ওয়ান সেশন করুন।",
//     features: [
//       "কাস্টম ওয়ার্কআউট প্ল্যান",
//       "পুষ্টি পরামর্শ",
//       "নমনীয় সময়সূচী",
//     ],
//   },
//   {
//     icon: <Users className="h-10 w-10 text-[#E6533C]" />,
//     title: "Group Fitness Classes",
//     description:
//       "আমাদের ডাইনামিক গ্রুপ ক্লাসের মাধ্যমে একসাথে ব্যায়াম করার শক্তি এবং আনন্দ অনুভব করুন। প্রতিটি ক্লাস মজাদার এবং চ্যালেঞ্জিং।",
//     features: ["ইয়োগা ও মেডিটেশন", "জুম্বা ও অ্যারোবিক্স", "HIIT"],
//   },
//   {
//     icon: <HeartPulse className="h-10 w-10 text-[#E6533C]" />,
//     title: "Strength & Conditioning",
//     description:
//       "শারীরিক শক্তি, পেশী গঠন এবং পারফরম্যান্স বাড়াতে আমাদের বিশ্বমানের ইকুইপমেন্ট এবং বিশেষজ্ঞ কোচের সাহায্য নিন।",
//     features: ["ওয়েট লিফটিং", "বডিবিল্ডিং", "ফাংশনাল ট্রেনিং"],
//   },
//   {
//     icon: <Salad className="h-10 w-10 text-[#E6533C]" />,
//     title: "Nutrition & Wellness",
//     description:
//       "সঠিক পুষ্টি ছাড়া ফিটনেস অসম্পূর্ণ। আমাদের পুষ্টিবিদরা আপনাকে একটি স্বাস্থ্যকর ও টেকসই ডায়েট প্ল্যান তৈরিতে সাহায্য করবে।",
//     features: [
//       "কাস্টম ডায়েট প্ল্যান",
//       "ওয়েলনেস কাউন্সেলিং",
//       "সাপ্লিমেন্ট গাইডেন্স",
//     ],
//   },
// ];

// const whyChooseUsItems = [
//   {
//     icon: <Award className="h-12 w-12 text-[#E6533C]" />,
//     title: "অভিজ্ঞ প্রশিক্ষক",
//     description:
//       "আমাদের সকল প্রশিক্ষক সার্টিফাইড এবং নিজ নিজ ক্ষেত্রে অত্যন্ত অভিজ্ঞ।",
//   },
//   {
//     icon: <Zap className="h-12 w-12 text-[#E6533C]" />,
//     title: "আধুনিক যন্ত্রপাতি",
//     description:
//       "আমরা বিশ্বের সেরা ব্র্যান্ডের অত্যাধুনিক যন্ত্রপাতি ব্যবহার করি।",
//   },
//   {
//     icon: <Sun className="h-12 w-12 text-[#E6533C]" />,
//     title: "পরিচ্ছন্ন পরিবেশ",
//     description:
//       "আপনার স্বাস্থ্যের কথা মাথায় রেখে আমরা সর্বদা পরিষ্কার-পরিচ্ছন্ন পরিবেশ বজায় রাখি।",
//   },
//   {
//     icon: <ShieldCheck className="h-12 w-12 text-[#E6533C]" />,
//     title: "সহযোগী কমিউনিটি",
//     description:
//       "আমাদের বন্ধুত্বপূর্ণ এবং অনুপ্রেরণামূলক পরিবেশে আপনি সবসময় স্বাচ্ছন্দ্য বোধ করবেন।",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="bg-[#001118] text-gray-200">
//       {/* Hero Section */}
//       <motion.section
//         className="min-h-screen flex flex-col justify-center items-center text-center px-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
//           {...fadeInAnimation}
//         >
//           আমাদের সার্ভিসসমূহ
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-lg md:text-xl max-w-3xl text-gray-400"
//           {...fadeInAnimation}
//           transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
//         >
//           আপনার ফিটনেস লক্ষ্য অর্জনে আমরা আছি আপনার পাশে। আপনার প্রয়োজন
//           অনুযায়ী সেরা পরিষেবাটি বেছে নিন এবং আপনার যাত্রা শুরু করুন।
//         </motion.p>
//       </motion.section>

//       {/* Services Grid Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl md:text-5xl font-bold text-center mb-12"
//             {...fadeInAnimation}
//           >
//             আমাদের প্রধান <span className="text-[#E6533C]">সার্ভিসসমূহ</span>
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#001f2b] p-8 rounded-lg border border-gray-700/50 shadow-lg flex flex-col"
//                 variants={itemVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   y: -10,
//                   boxShadow: "0px 20px 30px rgba(0,0,0,0.3)",
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-2xl font-bold mb-3 text-white">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 mb-4 flex-grow">
//                   {service.description}
//                 </p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center text-gray-300">
//                       <ShieldCheck className="h-4 w-4 mr-2 text-[#E6533C]" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-4 bg-[#001f2b]/50">
//         <div className="container mx-auto text-center">
//           <motion.h2
//             className="text-3xl md:text-5xl font-bold mb-12"
//             {...fadeInAnimation}
//           >
//             কেন আমাদের <span className="text-[#E6533C]">বেছে নিবেন?</span>
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {whyChooseUsItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center"
//                 variants={itemVariants}
//               >
//                 <div className="bg-gray-800/50 p-6 rounded-full border-2 border-[#E6533C]/30 mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-4 text-center">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl md:text-5xl font-bold"
//             {...fadeInAnimation}
//           >
//             আপনার ফিটনেস যাত্রা শুরু করতে প্রস্তুত?
//           </motion.h2>
//           <motion.p
//             className="mt-4 text-lg max-w-2xl mx-auto text-gray-400"
//             {...fadeInAnimation}
//             transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
//           >
//             আজই আমাদের সাথে যোগ দিন এবং আপনার সেরা সংস্করণটি আবিষ্কার করুন। একটি
//             বিনামূল্যে ট্রায়াল ক্লাসের জন্য সাইন আপ করুন।
//           </motion.p>
//           <motion.div
//             className="mt-8 flex justify-center gap-4"
//             {...fadeInAnimation}
//             transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
//           >
//             <motion.button
//               className="bg-[#E6533C] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               জয়েন করুন
//             </motion.button>
//             <motion.button
//               className="bg-transparent border-2 border-[#E6533C] text-[#E6533C] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#E6533C] hover:text-white transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               ফ্রি ট্রায়াল নিন
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// Make sure to use this at the top of the file in Next.js App Router
"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  HeartPulse,
  Salad,
  ShieldCheck,
  Zap,
  Award,
  Sun,
} from "lucide-react";

// Reusable animation variants
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

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-[#E6533C]" />,
    title: "Personal Training",
    description:
      "Achieve your fitness goals quickly and effectively with one-on-one sessions from our certified trainers.",
    features: [
      "Custom Workout Plans",
      "Nutrition Guidance",
      "Flexible Scheduling",
    ],
  },
  {
    icon: <Users className="h-10 w-10 text-[#E6533C]" />,
    title: "Group Fitness Classes",
    description:
      "Experience the energy and joy of working out together in our dynamic group classes. Every class is fun and challenging.",
    features: [
      "Yoga & Meditation",
      "Zumba & Aerobics",
      "High-Intensity (HIIT)",
    ],
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-[#E6533C]" />,
    title: "Strength & Conditioning",
    description:
      "Build physical strength, muscle, and performance with our world-class equipment and expert coaches.",
    features: ["Weight Lifting", "Bodybuilding", "Functional Training"],
  },
  {
    icon: <Salad className="h-10 w-10 text-[#E6533C]" />,
    title: "Nutrition & Wellness",
    description:
      "Fitness is incomplete without proper nutrition. Our nutritionists will help you create a healthy and sustainable diet plan.",
    features: [
      "Custom Diet Plans",
      "Wellness Counseling",
      "Supplement Guidance",
    ],
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-12 w-12 text-[#E6533C]" />,
    title: "Expert Trainers",
    description:
      "All our trainers are certified and highly experienced in their respective fields.",
  },
  {
    icon: <Zap className="h-12 w-12 text-[#E6533C]" />,
    title: "Modern Equipment",
    description:
      "We use state-of-the-art equipment from the world's leading brands.",
  },
  {
    icon: <Sun className="h-12 w-12 text-[#E6533C]" />,
    title: "Hygienic Environment",
    description:
      "We always maintain a clean and hygienic environment for your health and safety.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-[#E6533C]" />,
    title: "Supportive Community",
    description:
      "You will always feel comfortable in our friendly and inspiring community.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#001118] text-gray-200">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          {...fadeInAnimation}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl text-gray-400"
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          We are here to help you achieve your fitness goals. Choose the best
          service tailored to your needs and start your journey.
        </motion.p>
      </motion.section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12"
            {...fadeInAnimation}
          >
            Our Core <span className="text-[#E6533C]">Services</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#001f2b] p-8 rounded-lg border border-gray-700/50 shadow-lg flex flex-col"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0px 20px 30px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ShieldCheck className="h-4 w-4 mr-2 text-[#E6533C]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-[#001f2b]/50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12"
            {...fadeInAnimation}
          >
            Why <span className="text-[#E6533C]">Choose Us?</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="bg-gray-800/50 p-6 rounded-full border-2 border-[#E6533C]/30 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </motion.div>
            ))}
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
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-400"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            Join us today and discover the best version of yourself. Sign up for
            a free trial class to get started.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-4 flex-wrap"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
          >
            <motion.button
              className="bg-[#E6533C] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-[#E6533C] text-[#E6533C] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#E6533C] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
