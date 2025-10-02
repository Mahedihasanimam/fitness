// // "use client";
// // import { motion } from "framer-motion";
// // import {
// //   LineChart,
// //   Line,
// //   BarChart,
// //   Bar,
// //   AreaChart,
// //   Area,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// //   PieChart,
// //   Pie,
// //   Cell,
// // } from "recharts";
// // import {
// //   UserOutlined,
// //   CalendarOutlined,
// //   FireFilled,
// //   HeartFilled,
// //   BarChartOutlined,
// //   SettingOutlined,
// //   PlusCircleFilled,
// //   RightOutlined,
// //   VideoCameraFilled,
// //   FlagFilled,
// //   TrophyFilled,
// //   RunningOutlined,
// //   WeightOutlined,
// //   ClockCircleOutlined,
// // } from "@ant-design/icons";

// // // Enhanced Dummy Data
// // const userData = {
// //   name: "Alex Johnson",
// //   membership: "Pro Member",
// //   avatarUrl:
// //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
// //   stats: [
// //     {
// //       label: "Workouts This Week",
// //       value: "4",
// //       icon: <FireFilled />,
// //       color: "text-red-400",
// //       trend: "+12%",
// //     },
// //     {
// //       label: "Active Streak",
// //       value: "12 Days",
// //       icon: <HeartFilled />,
// //       color: "text-pink-400",
// //       trend: "+5",
// //     },
// //     {
// //       label: "Calories Burned",
// //       value: "2,540",
// //       icon: <BarChartOutlined />,
// //       color: "text-orange-400",
// //       trend: "+8%",
// //     },
// //     {
// //       label: "Monthly Progress",
// //       value: "78%",
// //       icon: <TrophyFilled />,
// //       color: "text-green-400",
// //       trend: "+15%",
// //     },
// //   ],
// //   schedule: [
// //     {
// //       id: 1,
// //       title: "HIIT Strength Training",
// //       time: "Today, 6:00 PM",
// //       trainer: "Sarah Johnson",
// //       type: "class",
// //       duration: "60 min",
// //       status: "upcoming",
// //     },
// //     {
// //       id: 2,
// //       title: "1-on-1 Personal Coaching",
// //       time: "Sep 26, 2025, 10:00 AM",
// //       trainer: "Mike Rodriguez",
// //       type: "session",
// //       duration: "45 min",
// //       status: "upcoming",
// //     },
// //     {
// //       id: 3,
// //       title: "Yoga & Mindfulness",
// //       time: "Sep 28, 2025, 8:00 AM",
// //       trainer: "Emily Chen",
// //       type: "class",
// //       duration: "75 min",
// //       status: "upcoming",
// //     },
// //   ],
// //   goals: [
// //     {
// //       title: "Run a 5k",
// //       progress: 75,
// //       target: "Complete by Oct 15",
// //       icon: <RunningOutlined />,
// //     },
// //     {
// //       title: "Complete 15 workouts this month",
// //       progress: 60,
// //       target: "On track",
// //       icon: <WeightOutlined />,
// //     },
// //     {
// //       title: "Lose 5kg",
// //       progress: 40,
// //       target: "Target: Dec 1",
// //       icon: <TrophyFilled />,
// //     },
// //   ],
// //   weightData: [
// //     { date: "Sep 1", weight: 175, target: 170 },
// //     { date: "Sep 8", weight: 173, target: 170 },
// //     { date: "Sep 15", weight: 172, target: 170 },
// //     { date: "Sep 22", weight: 171, target: 170 },
// //     { date: "Sep 29", weight: 170.5, target: 170 },
// //   ],
// //   weeklyActivity: [
// //     { day: "Mon", workouts: 2, calories: 850, minutes: 120 },
// //     { day: "Tue", workouts: 1, calories: 420, minutes: 60 },
// //     { day: "Wed", workouts: 3, calories: 1270, minutes: 180 },
// //     { day: "Thu", workouts: 2, calories: 800, minutes: 110 },
// //     { day: "Fri", workouts: 1, calories: 450, minutes: 65 },
// //     { day: "Sat", workouts: 2, calories: 900, minutes: 130 },
// //     { day: "Sun", workouts: 0, calories: 0, minutes: 0 },
// //   ],
// //   workoutDistribution: [
// //     { name: "Strength", value: 35, color: "#E6533C" },
// //     { name: "Cardio", value: 25, color: "#4299E1" },
// //     { name: "Yoga", value: 20, color: "#48BB78" },
// //     { name: "HIIT", value: 20, color: "#ED8936" },
// //   ],
// // };

// // const UserDashboardPage = () => {
// //   const containerVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 15 },
// //     visible: { opacity: 1, y: 0 },
// //   };

// //   const CustomTooltip = ({ active, payload, label }) => {
// //     if (active && payload && payload.length) {
// //       return (
// //         <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg shadow-lg">
// //           <p className="font-semibold text-white">{label}</p>
// //           {payload.map((entry, index) => (
// //             <p key={index} style={{ color: entry.color }}>
// //               {entry.name}: {entry.value} {entry.name === "weight" ? "lbs" : ""}
// //             </p>
// //           ))}
// //         </div>
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
// //       <div className="max-w-7xl mx-auto pt-20">
// //         {/* Professional Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8"
// //         >
// //           <div>
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
// //               Dashboard Overview
// //             </h1>
// //             <p className="text-gray-600 mt-2">
// //               Welcome back,{" "}
// //               <span className="font-semibold text-[#E6533C]">
// //                 {userData.name}
// //               </span>
// //               . Here's your fitness progress.
// //             </p>
// //           </div>
// //           <div className="flex items-center space-x-4 mt-4 lg:mt-0">
// //             <div className="text-right">
// //               <p className="font-semibold text-gray-900">{userData.name}</p>
// //               <p className="text-sm text-[#E6533C] font-medium">
// //                 {userData.membership}
// //               </p>
// //             </div>
// //             <img
// //               src={userData.avatarUrl}
// //               alt="User Avatar"
// //               className="w-12 h-12 rounded-full object-cover border-2 border-[#E6533C]"
// //             />
// //           </div>
// //         </motion.div>

// //         {/* Main Grid Layout */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className="grid grid-cols-1 xl:grid-cols-3 gap-6"
// //         >
// //           {/* Left Column - Main Content */}
// //           <div className="xl:col-span-2 space-y-6">
// //             {/* Key Metrics Grid */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
// //             >
// //               {userData.stats.map((stat, index) => (
// //                 <div
// //                   key={index}
// //                   className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
// //                     <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full">
// //                       {stat.trend}
// //                     </span>
// //                   </div>
// //                   <p className="text-2xl font-bold text-gray-900 mt-2">
// //                     {stat.value}
// //                   </p>
// //                   <p className="text-sm text-gray-600">{stat.label}</p>
// //                 </div>
// //               ))}
// //             </motion.div>

// //             {/* Weight Progress Chart */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-900">
// //                   Weight Progress
// //                 </h2>
// //                 <span className="text-sm text-gray-500">Last 30 days</span>
// //               </div>
// //               <div className="h-72">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <AreaChart
// //                     data={userData.weightData}
// //                     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
// //                     <XAxis dataKey="date" stroke="#666" />
// //                     <YAxis stroke="#666" />
// //                     <Tooltip content={<CustomTooltip />} />
// //                     <Area
// //                       type="monotone"
// //                       dataKey="weight"
// //                       stroke="#E6533C"
// //                       fill="#E6533C"
// //                       fillOpacity={0.1}
// //                       strokeWidth={2}
// //                       name="Current Weight"
// //                     />
// //                     <Area
// //                       type="monotone"
// //                       dataKey="target"
// //                       stroke="#48BB78"
// //                       fill="#48BB78"
// //                       fillOpacity={0.1}
// //                       strokeWidth={2}
// //                       strokeDasharray="5 5"
// //                       name="Target Weight"
// //                     />
// //                   </AreaChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>

// //             {/* Weekly Activity Chart */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-900 mb-6">
// //                 Weekly Activity Summary
// //               </h2>
// //               <div className="h-72">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart
// //                     data={userData.weeklyActivity}
// //                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
// //                     <XAxis dataKey="day" stroke="#666" />
// //                     <YAxis yAxisId="left" stroke="#666" />
// //                     <YAxis yAxisId="right" orientation="right" stroke="#666" />
// //                     <Tooltip content={<CustomTooltip />} />
// //                     <Legend />
// //                     <Bar
// //                       yAxisId="left"
// //                       dataKey="calories"
// //                       fill="#E6533C"
// //                       name="Calories Burned"
// //                       radius={[4, 4, 0, 0]}
// //                     />
// //                     <Bar
// //                       yAxisId="right"
// //                       dataKey="minutes"
// //                       fill="#4299E1"
// //                       name="Workout Minutes"
// //                       radius={[4, 4, 0, 0]}
// //                     />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Right Column - Sidebar */}
// //           <div className="space-y-6">
// //             {/* Upcoming Schedule */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <div className="flex items-center justify-between mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-900 flex items-center">
// //                   <CalendarOutlined className="mr-2 text-[#E6533C]" />
// //                   Upcoming Sessions
// //                 </h2>
// //                 <PlusCircleFilled className="text-[#E6533C] cursor-pointer hover:text-red-600" />
// //               </div>
// //               <div className="space-y-4">
// //                 {userData.schedule.map((item) => (
// //                   <div
// //                     key={item.id}
// //                     className="p-4 border border-gray-200 rounded-lg hover:border-[#E6533C] transition-colors"
// //                   >
// //                     <div className="flex justify-between items-start mb-2">
// //                       <div>
// //                         <p className="font-semibold text-gray-900">
// //                           {item.title}
// //                         </p>
// //                         <p className="text-sm text-gray-600">{item.trainer}</p>
// //                       </div>
// //                       <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
// //                         {item.duration}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center text-sm text-gray-500">
// //                         <ClockCircleOutlined className="mr-1" />
// //                         {item.time}
// //                       </div>
// //                       <button className="bg-[#E6533C] text-white text-sm font-medium py-1 px-3 rounded-lg hover:bg-red-600 transition-colors flex items-center">
// //                         <VideoCameraFilled className="mr-1" />
// //                         Join
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Workout Distribution */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-900 mb-6">
// //                 Workout Distribution
// //               </h2>
// //               <div className="h-64">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={userData.workoutDistribution}
// //                       cx="50%"
// //                       cy="50%"
// //                       labelLine={false}
// //                       label={({ name, percent }) =>
// //                         `${name} ${(percent * 100).toFixed(0)}%`
// //                       }
// //                       outerRadius={80}
// //                       fill="#8884d8"
// //                       dataKey="value"
// //                     >
// //                       {userData.workoutDistribution.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={entry.color} />
// //                       ))}
// //                     </Pie>
// //                     <Tooltip />
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>

// //             {/* Goals Progress */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
// //                 <FlagFilled className="mr-2 text-[#E6533C]" />
// //                 Fitness Goals
// //               </h2>
// //               <div className="space-y-5">
// //                 {userData.goals.map((goal, index) => (
// //                   <div key={index}>
// //                     <div className="flex items-center justify-between mb-2">
// //                       <div className="flex items-center">
// //                         <span className="text-[#E6533C] mr-2">{goal.icon}</span>
// //                         <span className="font-medium text-gray-900">
// //                           {goal.title}
// //                         </span>
// //                       </div>
// //                       <span className="text-sm font-semibold text-[#E6533C]">
// //                         {goal.progress}%
// //                       </span>
// //                     </div>
// //                     <div className="w-full bg-gray-100 rounded-full h-2">
// //                       <div
// //                         className="bg-gradient-to-r from-[#E6533C] to-red-500 h-2 rounded-full transition-all duration-500"
// //                         style={{ width: `${goal.progress}%` }}
// //                       ></div>
// //                     </div>
// //                     <p className="text-xs text-gray-500 mt-1">{goal.target}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Quick Actions */}
// //             <motion.div
// //               variants={itemVariants}
// //               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-900 mb-4">
// //                 Quick Actions
// //               </h2>
// //               <div className="space-y-3">
// //                 {[
// //                   {
// //                     label: "Book New Session",
// //                     icon: <PlusCircleFilled />,
// //                     color: "text-blue-600",
// //                   },
// //                   {
// //                     label: "View Progress Reports",
// //                     icon: <BarChartOutlined />,
// //                     color: "text-green-600",
// //                   },
// //                   {
// //                     label: "Update Fitness Plan",
// //                     icon: <SettingOutlined />,
// //                     color: "text-purple-600",
// //                   },
// //                   {
// //                     label: "Browse Workouts",
// //                     icon: <RunningOutlined />,
// //                     color: "text-orange-600",
// //                   },
// //                 ].map((action, index) => (
// //                   <button
// //                     key={index}
// //                     className="w-full flex justify-between items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
// //                   >
// //                     <div className="flex items-center">
// //                       <span className={`mr-3 ${action.color}`}>
// //                         {action.icon}
// //                       </span>
// //                       <span className="text-gray-700 font-medium">
// //                         {action.label}
// //                       </span>
// //                     </div>
// //                     <RightOutlined className="text-gray-400" />
// //                   </button>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboardPage;

// "use client";
// import { motion } from "framer-motion";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   FireFilled,
//   HeartFilled,
//   BarChartOutlined,
//   SettingOutlined,
//   PlusCircleFilled,
//   RightOutlined,
//   VideoCameraFilled,
//   FlagFilled,
//   TrophyFilled,
//   RunningOutlined,
//   WeightOutlined,
//   ClockCircleOutlined,
// } from "@ant-design/icons";

// // Enhanced Dummy Data
// const userData = {
//   name: "Alex Johnson",
//   membership: "Pro Member",
//   avatarUrl:
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//   stats: [
//     {
//       label: "Workouts This Week",
//       value: "4",
//       icon: <FireFilled />,
//       color: "text-red-400",
//       trend: "+12%",
//     },
//     {
//       label: "Active Streak",
//       value: "12 Days",
//       icon: <HeartFilled />,
//       color: "text-pink-400",
//       trend: "+5",
//     },
//     {
//       label: "Calories Burned",
//       value: "2,540",
//       icon: <BarChartOutlined />,
//       color: "text-orange-400",
//       trend: "+8%",
//     },
//     {
//       label: "Monthly Progress",
//       value: "78%",
//       icon: <TrophyFilled />,
//       color: "text-green-400",
//       trend: "+15%",
//     },
//   ],
//   schedule: [
//     {
//       id: 1,
//       title: "HIIT Strength Training",
//       time: "Today, 6:00 PM",
//       trainer: "Sarah Johnson",
//       type: "class",
//       duration: "60 min",
//       status: "upcoming",
//     },
//     {
//       id: 2,
//       title: "1-on-1 Personal Coaching",
//       time: "Sep 26, 2025, 10:00 AM",
//       trainer: "Mike Rodriguez",
//       type: "session",
//       duration: "45 min",
//       status: "upcoming",
//     },
//     {
//       id: 3,
//       title: "Yoga & Mindfulness",
//       time: "Sep 28, 2025, 8:00 AM",
//       trainer: "Emily Chen",
//       type: "class",
//       duration: "75 min",
//       status: "upcoming",
//     },
//   ],
//   goals: [
//     {
//       title: "Run a 5k",
//       progress: 75,
//       target: "Complete by Oct 15",
//       icon: <RunningOutlined />,
//     },
//     {
//       title: "Complete 15 workouts this month",
//       progress: 60,
//       target: "On track",
//       icon: <WeightOutlined />,
//     },
//     {
//       title: "Lose 5kg",
//       progress: 40,
//       target: "Target: Dec 1",
//       icon: <TrophyFilled />,
//     },
//   ],
//   weightData: [
//     { date: "Sep 1", weight: 175, target: 170 },
//     { date: "Sep 8", weight: 173, target: 170 },
//     { date: "Sep 15", weight: 172, target: 170 },
//     { date: "Sep 22", weight: 171, target: 170 },
//     { date: "Sep 29", weight: 170.5, target: 170 },
//   ],
//   weeklyActivity: [
//     { day: "Mon", workouts: 2, calories: 850, minutes: 120 },
//     { day: "Tue", workouts: 1, calories: 420, minutes: 60 },
//     { day: "Wed", workouts: 3, calories: 1270, minutes: 180 },
//     { day: "Thu", workouts: 2, calories: 800, minutes: 110 },
//     { day: "Fri", workouts: 1, calories: 450, minutes: 65 },
//     { day: "Sat", workouts: 2, calories: 900, minutes: 130 },
//     { day: "Sun", workouts: 0, calories: 0, minutes: 0 },
//   ],
//   workoutDistribution: [
//     { name: "Strength", value: 35, color: "#E6533C" },
//     { name: "Cardio", value: 25, color: "#4299E1" },
//     { name: "Yoga", value: 20, color: "#48BB78" },
//     { name: "HIIT", value: 20, color: "#ED8936" },
//   ],
// };

// // Custom Tooltip Component
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg shadow-lg">
//         <p className="font-semibold text-white mb-2">{label}</p>
//         {payload.map((entry, index) => (
//           <p key={index} className="text-sm" style={{ color: entry.color }}>
//             {entry.name}: {entry.value}{" "}
//             {entry.dataKey === "weight"
//               ? "lbs"
//               : entry.dataKey === "calories"
//               ? "cal"
//               : entry.dataKey === "minutes"
//               ? "min"
//               : ""}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// // Custom Label for Pie Chart
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }) => {
//   const RADIAN = Math.PI / 180;
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const UserDashboardPage = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
//       <div className="max-w-7xl mx-auto pt-20">
//         {/* Professional Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8"
//         >
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Dashboard Overview
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Welcome back,{" "}
//               <span className="font-semibold text-[#E6533C]">
//                 {userData.name}
//               </span>
//               . Here's your fitness progress.
//             </p>
//           </div>
//           <div className="flex items-center space-x-4 mt-4 lg:mt-0">
//             <div className="text-right">
//               <p className="font-semibold text-gray-900">{userData.name}</p>
//               <p className="text-sm text-[#E6533C] font-medium">
//                 {userData.membership}
//               </p>
//             </div>
//             <img
//               src={userData.avatarUrl}
//               alt="User Avatar"
//               className="w-12 h-12 rounded-full object-cover border-2 border-[#E6533C]"
//             />
//           </div>
//         </motion.div>

//         {/* Main Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 xl:grid-cols-3 gap-6"
//         >
//           {/* Left Column - Main Content */}
//           <div className="xl:col-span-2 space-y-6">
//             {/* Key Metrics Grid */}
//             <motion.div
//               variants={itemVariants}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//             >
//               {userData.stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
//                     <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full">
//                       {stat.trend}
//                     </span>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900 mt-2">
//                     {stat.value}
//                   </p>
//                   <p className="text-sm text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </motion.div>

//             {/* Weight Progress Chart */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Weight Progress
//                 </h2>
//                 <span className="text-sm text-gray-500">Last 30 days</span>
//               </div>
//               <div className="h-72">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart
//                     data={userData.weightData}
//                     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                     <XAxis dataKey="date" stroke="#666" />
//                     <YAxis stroke="#666" />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Area
//                       type="monotone"
//                       dataKey="weight"
//                       stroke="#E6533C"
//                       fill="#E6533C"
//                       fillOpacity={0.1}
//                       strokeWidth={2}
//                       name="Current Weight"
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="target"
//                       stroke="#48BB78"
//                       fill="#48BB78"
//                       fillOpacity={0.1}
//                       strokeWidth={2}
//                       strokeDasharray="5 5"
//                       name="Target Weight"
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>

//             {/* Weekly Activity Chart */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                 Weekly Activity Summary
//               </h2>
//               <div className="h-72">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={userData.weeklyActivity}
//                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                     <XAxis dataKey="day" stroke="#666" />
//                     <YAxis yAxisId="left" stroke="#666" />
//                     <YAxis yAxisId="right" orientation="right" stroke="#666" />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Legend />
//                     <Bar
//                       yAxisId="left"
//                       dataKey="calories"
//                       fill="#E6533C"
//                       name="Calories Burned"
//                       radius={[4, 4, 0, 0]}
//                     />
//                     <Bar
//                       yAxisId="right"
//                       dataKey="minutes"
//                       fill="#4299E1"
//                       name="Workout Minutes"
//                       radius={[4, 4, 0, 0]}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Sidebar */}
//           <div className="space-y-6">
//             {/* Upcoming Schedule */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900 flex items-center">
//                   <CalendarOutlined className="mr-2 text-[#E6533C]" />
//                   Upcoming Sessions
//                 </h2>
//                 <PlusCircleFilled className="text-[#E6533C] cursor-pointer hover:text-red-600" />
//               </div>
//               <div className="space-y-4">
//                 {userData.schedule.map((item) => (
//                   <div
//                     key={item.id}
//                     className="p-4 border border-gray-200 rounded-lg hover:border-[#E6533C] transition-colors"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <p className="font-semibold text-gray-900">
//                           {item.title}
//                         </p>
//                         <p className="text-sm text-gray-600">{item.trainer}</p>
//                       </div>
//                       <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
//                         {item.duration}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center text-sm text-gray-500">
//                         <ClockCircleOutlined className="mr-1" />
//                         {item.time}
//                       </div>
//                       <button className="bg-[#E6533C] text-white text-sm font-medium py-1 px-3 rounded-lg hover:bg-red-600 transition-colors flex items-center">
//                         <VideoCameraFilled className="mr-1" />
//                         Join
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Workout Distribution */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                 Workout Distribution
//               </h2>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={userData.workoutDistribution}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={renderCustomizedLabel}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {userData.workoutDistribution.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>

//             {/* Goals Progress */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
//                 <FlagFilled className="mr-2 text-[#E6533C]" />
//                 Fitness Goals
//               </h2>
//               <div className="space-y-5">
//                 {userData.goals.map((goal, index) => (
//                   <div key={index}>
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center">
//                         <span className="text-[#E6533C] mr-2">{goal.icon}</span>
//                         <span className="font-medium text-gray-900">
//                           {goal.title}
//                         </span>
//                       </div>
//                       <span className="text-sm font-semibold text-[#E6533C]">
//                         {goal.progress}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-100 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-[#E6533C] to-red-500 h-2 rounded-full transition-all duration-500"
//                         style={{ width: `${goal.progress}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">{goal.target}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Actions */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Quick Actions
//               </h2>
//               <div className="space-y-3">
//                 {[
//                   {
//                     label: "Book New Session",
//                     icon: <PlusCircleFilled />,
//                     color: "text-blue-600",
//                   },
//                   {
//                     label: "View Progress Reports",
//                     icon: <BarChartOutlined />,
//                     color: "text-green-600",
//                   },
//                   {
//                     label: "Update Fitness Plan",
//                     icon: <SettingOutlined />,
//                     color: "text-purple-600",
//                   },
//                   {
//                     label: "Browse Workouts",
//                     icon: <RunningOutlined />,
//                     color: "text-orange-600",
//                   },
//                 ].map((action, index) => (
//                   <button
//                     key={index}
//                     className="w-full flex justify-between items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
//                   >
//                     <div className="flex items-center">
//                       <span className={`mr-3 ${action.color}`}>
//                         {action.icon}
//                       </span>
//                       <span className="text-gray-700 font-medium">
//                         {action.label}
//                       </span>
//                     </div>
//                     <RightOutlined className="text-gray-400" />
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboardPage;

import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
