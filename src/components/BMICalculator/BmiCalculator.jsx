// import { Button } from "antd";
// import React from "react";

// const BmiCalculator = () => {
//   return (
//     <div className=" bg-gray-900 text-white pb-8">

//         {/* Top Title Section---------------------------------------- */}
//       <div className="container mx-auto">
//         <div className="lg:max-w-2xl lg:text-start text-start   p-6 mx-auto pb-24 pt-8">
//           <h1 className="lg:text-5xl text-4xl  font-black mb-4">
//             BMI Calculator
//           </h1>
//           <p className="text-[#FFFFFF80] ">
//             {" "}
//             We believe fitness should be accessible to everyone, everywhere,
//             regardless of income or access to a gym.
//           </p>
//         </div>
//       </div>

//         <div className="lg:flex md:flex flex-wrap  justify-between container mx-auto lg:p-10 p-6 lg:space-y-0 md:space-y-0 space-y-12">
//           {/* BMI Calculator Chart Section */}
//           <div className="lg:w-1/2 w-full pr-10 ">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold">BMI Calculator Chart</h2>
//             </div>
//             <table className="table-auto w-full text-left">
//               <thead>
//                 <tr className="border-b border-gray-600">
//                   <th className="pb-2">BMI</th>
//                   <th className="pb-2">Weight Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b border-gray-600">
//                   <td className="py-2">Below 18.5</td>
//                   <td className="py-2">Underweight</td>
//                 </tr>
//                 <tr className="border-b border-gray-600">
//                   <td className="py-2">18.5 - 24.9</td>
//                   <td className="py-2">Healthy</td>
//                 </tr>
//                 <tr className="border-b border-gray-600">
//                   <td className="py-2">25.0 - 29.9</td>
//                   <td className="py-2">Overweight</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">30.0 and Above</td>
//                   <td className="py-2">Obese</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* BMI Calculator Form Section */}
//           <div className="lg:w-1/2  w-full lg:pl-10">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold">Calculate your BMI</h2>
//               <p className="text-gray-400 text-sm mt-2">
//                 We believe fitness should be accessible to everyone, everywhere,
//                 regardless of income or access to a gym.
//               </p>
//             </div>
//             <form className="space-y-4">
//               <div className="flex space-x-4">
//                 <input
//                   type="text"
//                   placeholder="Height/cm"
//                   className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Weight/kg"
//                   className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Age"
//                 className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
//               />
//               <select className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md">
//                 <option value="">Select your sex</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//               <select className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md">
//                 <option value="">Select an activity factor</option>
//                 <option value="low">Low Activity</option>
//                 <option value="moderate">Moderate Activity</option>
//                 <option value="high">High Activity</option>
//               </select>
//               <Button
//           style={{border: "none",backgroundColor:'#E6533C',color:'white',padding:'25px 55px'}}
//           size="large"
//             rel="noopener noreferrer"

//             className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-full"
//           >
//             Calculate
//           </Button>
//             </form>
//           </div>
//         </div>

//     </div>
//   );
// };

// export default BmiCalculator;

import { Button } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Scale, TrendingUp, Heart } from "lucide-react";

const BmiCalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    sex: "",
    activity: "",
  });
  const [bmiResult, setBmiResult] = useState(null);
  const [weightStatus, setWeightStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = Number(formData.height) / 100;
    const weight = Number(formData.weight);

    if (heightInMeters > 0 && weight > 0) {
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(parseFloat(bmi.toFixed(1)));

      // Determine weight status
      if (bmi < 18.5) setWeightStatus("Underweight");
      else if (bmi >= 18.5 && bmi <= 24.9) setWeightStatus("Healthy");
      else if (bmi >= 25 && bmi <= 29.9) setWeightStatus("Overweight");
      else setWeightStatus("Obese");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const resultVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Underweight":
        return "text-yellow-400";
      case "Healthy":
        return "text-green-400";
      case "Overweight":
        return "text-orange-400";
      case "Obese":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "Underweight":
        return "bg-yellow-400 bg-opacity-10";
      case "Healthy":
        return "bg-green-400 bg-opacity-10";
      case "Overweight":
        return "bg-orange-400 bg-opacity-10";
      case "Obese":
        return "bg-red-400 bg-opacity-10";
      default:
        return "bg-gray-400 bg-opacity-10";
    }
  };

  return (
    <div className="bg-gray-900 text-white pb-8">
      {/* Top Title Section */}
      <div className="container mx-auto">
        <motion.div
          className="lg:max-w-2xl text-start p-6 mx-auto pb-24 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="lg:text-5xl text-4xl font-black mb-4"
            variants={itemVariants}
          >
            <span className="text-[#E6533C]">BMI</span> Calculator
          </motion.h1>
          <motion.p
            className="text-[#FFFFFF80] text-lg leading-relaxed"
            variants={itemVariants}
          >
            Track your health with our accurate BMI calculator. Understand your
            weight status and take the first step towards a healthier lifestyle.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto lg:p-10 p-6">
        <div className="lg:flex justify-between items-start gap-12">
          {/* BMI Calculator Chart Section */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={chartVariants}
          >
            <motion.div
              className="mb-8 p-6 bg-gray-800 rounded-xl border border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Scale className="text-[#E6533C] mr-3" size={24} />
                <h2 className="text-2xl font-bold">BMI Calculator Chart</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    range: "Below 18.5",
                    status: "Underweight",
                    color: "border-l-yellow-400",
                  },
                  {
                    range: "18.5 - 24.9",
                    status: "Healthy",
                    color: "border-l-green-400",
                  },
                  {
                    range: "25.0 - 29.9",
                    status: "Overweight",
                    color: "border-l-orange-400",
                  },
                  {
                    range: "30.0 and Above",
                    status: "Obese",
                    color: "border-l-red-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.status}
                    className={`p-4 bg-gray-700 rounded-lg border-l-4 ${item.color} hover:bg-gray-600 transition-colors duration-300`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.range}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "Underweight"
                            ? "bg-yellow-400 bg-opacity-20 text-yellow-300"
                            : item.status === "Healthy"
                            ? "bg-green-400 bg-opacity-20 text-green-300"
                            : item.status === "Overweight"
                            ? "bg-orange-400 bg-opacity-20 text-orange-300"
                            : "bg-red-400 bg-opacity-20 text-red-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Health Tips */}
            <motion.div
              className="p-6 bg-gradient-to-r from-[#E6533C] to-orange-600 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center mb-3">
                <Heart className="text-white mr-2" size={20} />
                <h3 className="text-lg font-bold text-white">Health Tip</h3>
              </div>
              <p className="text-white text-opacity-90">
                Maintaining a healthy BMI reduces the risk of chronic diseases
                and improves overall wellbeing.
              </p>
            </motion.div>

            {/* BMI Result Display */}
            {bmiResult && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={resultVariants}
                className={`mt-6 p-6 rounded-lg ${getStatusBgColor(
                  weightStatus
                )} border border-gray-600`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Your BMI Result</h3>
                  <div className="text-4xl font-black mb-2">{bmiResult}</div>
                  <div
                    className={`text-lg font-semibold ${getStatusColor(
                      weightStatus
                    )}`}
                  >
                    {weightStatus}
                  </div>
                  <p className="text-gray-300 mt-3 text-sm">
                    {weightStatus === "Healthy"
                      ? "Great! You're in the healthy weight range."
                      : "Consider consulting with a healthcare professional for personalized advice."}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* BMI Calculator Form Section */}
          <motion.div
            className="lg:w-1/2 w-full lg:mt-0 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
          >
            <motion.div
              className="p-8 bg-gray-800 rounded-xl border border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Calculator className="text-[#E6533C] mr-3" size={24} />
                <h2 className="text-2xl font-bold">Calculate your BMI</h2>
              </div>

              <p className="text-gray-400 mb-6">
                Enter your details to get an accurate BMI calculation and
                personalized insights.
              </p>

              <form onSubmit={calculateBMI} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="175"
                      className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#E6533C] transition-colors duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="70"
                      className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#E6533C] transition-colors duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="25"
                    className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#E6533C] transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Gender
                  </label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#E6533C] transition-colors duration-300"
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Activity Level
                  </label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#E6533C] transition-colors duration-300"
                  >
                    <option value="">Select activity level</option>
                    <option value="sedentary">
                      Sedentary (little or no exercise)
                    </option>
                    <option value="light">
                      Light (exercise 1-3 times/week)
                    </option>
                    <option value="moderate">
                      Moderate (exercise 3-5 times/week)
                    </option>
                    <option value="active">Active (daily exercise)</option>
                    <option value="very-active">
                      Very Active (intense daily exercise)
                    </option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    htmlType="submit"
                    style={{
                      border: "none",
                      backgroundColor: "#E6533C",
                      color: "white",
                      height: "56px",
                      width: "100%",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    size="large"
                    className="rounded-lg hover:bg-[#d44a34] transition-colors duration-300"
                  >
                    <TrendingUp className="mr-2" size={18} />
                    Calculate BMI
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
