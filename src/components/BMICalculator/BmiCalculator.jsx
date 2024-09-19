import { Button } from "antd";
import React from "react";

const BmiCalculator = () => {
  return (
    <div className=" bg-gray-900 text-white pb-8">

        {/* Top Title Section---------------------------------------- */}
      <div className="container mx-auto">
        <div className="lg:max-w-2xl lg:text-start text-start   p-6 mx-auto pb-24 pt-8">
          <h1 className="lg:text-5xl text-4xl  font-black mb-4">
            BMI Calculator
          </h1>
          <p className="text-[#FFFFFF80] ">
            {" "}
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>
      </div>

  
        <div className="lg:flex md:flex flex-wrap  justify-between container mx-auto lg:p-10 p-6 lg:space-y-0 md:space-y-0 space-y-12">
          {/* BMI Calculator Chart Section */}
          <div className="lg:w-1/2 w-full pr-10 ">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">BMI Calculator Chart</h2>
            </div>
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="pb-2">BMI</th>
                  <th className="pb-2">Weight Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Below 18.5</td>
                  <td className="py-2">Underweight</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">18.5 - 24.9</td>
                  <td className="py-2">Healthy</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">25.0 - 29.9</td>
                  <td className="py-2">Overweight</td>
                </tr>
                <tr>
                  <td className="py-2">30.0 and Above</td>
                  <td className="py-2">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BMI Calculator Form Section */}
          <div className="lg:w-1/2  w-full lg:pl-10">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Calculate your BMI</h2>
              <p className="text-gray-400 text-sm mt-2">
                We believe fitness should be accessible to everyone, everywhere,
                regardless of income or access to a gym.
              </p>
            </div>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Height/cm"
                  className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Weight/kg"
                  className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Age"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md"
              />
              <select className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md">
                <option value="">Select your sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-md">
                <option value="">Select an activity factor</option>
                <option value="low">Low Activity</option>
                <option value="moderate">Moderate Activity</option>
                <option value="high">High Activity</option>
              </select>
              <Button
          style={{border: "none",backgroundColor:'#E6533C',color:'white',padding:'25px 55px'}}
          size="large"
            rel="noopener noreferrer"
            
            className="lg:px-24 md:px-12  px-8 py-4 text-lg font-semibold cursor-pointer  bg-[#E6533C] text-white rounded-full"
          >
            Calculate
          </Button>
            </form>
          </div>
        </div>

    </div>
  );
};

export default BmiCalculator;
