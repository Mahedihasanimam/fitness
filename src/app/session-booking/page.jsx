"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  StarFilled,
  FireFilled,
  TrophyFilled,
  SafetyCertificateFilled,
  TeamOutlined,
  IdcardOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Button, Select, TimePicker, message, Card, Form, Input } from "antd";
import dayjs from "dayjs";

const { TextArea } = Input;

const BookSessionPage = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [form] = Form.useForm();

  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Personal Training & Nutrition",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
      sessions: 1500,
      certifications: ["NASM-CPT", "Precision Nutrition", "First Aid/CPR"],
      bio: "Specialized in weight management and functional training with a holistic approach to fitness.",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialization: "Strength & Conditioning",
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=150&h=150&fit=crop&crop=face",
      sessions: 2200,
      certifications: ["CSCS", "ACE Advanced", "Rehab Specialist"],
      bio: "Former collegiate athlete with expertise in sports performance and injury prevention.",
    },
    {
      id: 3,
      name: "Emily Chen",
      specialization: "Yoga & Mindfulness",
      experience: "6 years",
      rating: 4.95,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop&crop=face",
      sessions: 1800,
      certifications: ["RYT-500", "Yoga Therapy", "Meditation Instructor"],
      bio: "Combines traditional yoga practices with modern wellness techniques for balanced living.",
    },
  ];

  const sessionTypes = [
    { value: "consultation", label: "Initial Consultation" },
    { value: "personal", label: "One-on-One Training" },
    { value: "group", label: "Group Training Session" },
    { value: "nutrition", label: "Nutrition Planning" },
    { value: "rehab", label: "Rehabilitation Session" },
  ];

  const availableDates = [
    dayjs().add(1, "day"),
    dayjs().add(2, "day"),
    dayjs().add(3, "day"),
    dayjs().add(5, "day"),
    dayjs().add(7, "day"),
  ];

  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  const onFinish = (values) => {
    if (!selectedTrainer || !selectedDate || !selectedTime) {
      message.error("Please complete all required selections");
      return;
    }

    message.success({
      content:
        "Session booked successfully! Confirmation details have been sent to your email.",
      duration: 4,
    });

    // Reset form
    setSelectedTrainer(null);
    setSelectedDate(null);
    setSelectedTime(null);
    form.resetFields();
  };

  const professionalStats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "2,500+", label: "Sessions Completed" },
    { value: "15+", label: "Years Combined Experience" },
    { value: "100%", label: "Certified Professionals" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Professional Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Professional Fitness{" "}
              <span className="text-[#E6533C]">Consultation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Book your personalized session with certified fitness experts.
              Achieve your goals with science-backed training methodologies.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {professionalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E6533C]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Booking Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trainer Selection */}
            <Card
              className="shadow-lg border-0"
              title={
                <div className="flex items-center text-lg font-semibold">
                  <IdcardOutlined className="text-[#E6533C] mr-3" />
                  Select Your Trainer
                </div>
              }
            >
              <div className="space-y-4">
                {trainers.map((trainer) => (
                  <motion.div
                    key={trainer.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      selectedTrainer?.id === trainer.id
                        ? "border-[#E6533C] bg-red-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedTrainer(trainer)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        {selectedTrainer?.id === trainer.id && (
                          <CheckCircleOutlined className="absolute -top-1 -right-1 text-[#E6533C] bg-white rounded-full" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {trainer.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {trainer.specialization}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <StarFilled className="text-yellow-400" />
                            <span className="font-semibold">
                              {trainer.rating}
                            </span>
                            <span className="text-gray-500 text-sm">
                              ({trainer.reviews})
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-2">
                          {trainer.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {trainer.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Session Details */}
            <Card
              className="shadow-lg border-0"
              title={
                <div className="flex items-center text-lg font-semibold">
                  <CalendarOutlined className="text-[#E6533C] mr-3" />
                  Session Details
                </div>
              }
            >
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <div className="grid md:grid-cols-2 gap-6">
                  <Form.Item label="Session Type" name="sessionType" required>
                    <Select
                      placeholder="Select session type"
                      options={sessionTypes}
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Preferred Duration"
                    name="duration"
                    required
                  >
                    <Select
                      placeholder="Select duration"
                      options={[
                        { value: 60, label: "60 minutes" },
                        { value: 90, label: "90 minutes" },
                        { value: 120, label: "120 minutes" },
                      ]}
                      size="large"
                    />
                  </Form.Item>
                </div>

                <Form.Item label="Select Date" required>
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {availableDates.map((date, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        className={`flex flex-col items-center p-4 rounded-lg min-w-[100px] transition-all ${
                          selectedDate?.isSame(date, "day")
                            ? "bg-[#E6533C] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedDate(date)}
                      >
                        <span className="text-2xl font-bold">
                          {date.format("D")}
                        </span>
                        <span className="text-sm">{date.format("MMM")}</span>
                        <span className="text-xs mt-1">
                          {date.format("ddd")}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </Form.Item>

                <Form.Item label="Preferred Time" required>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((time, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-[#E6533C] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </Form.Item>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <UserOutlined className="text-[#E6533C] mr-2" />
                    Your Information
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Item name="firstName" label="First Name" required>
                      <Input size="large" placeholder="Enter your first name" />
                    </Form.Item>
                    <Form.Item name="lastName" label="Last Name" required>
                      <Input size="large" placeholder="Enter your last name" />
                    </Form.Item>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Item name="email" label="Email Address" required>
                      <Input
                        size="large"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number" required>
                      <Input size="large" placeholder="+1 (555) 000-0000" />
                    </Form.Item>
                  </div>

                  <Form.Item name="goals" label="Fitness Goals & Notes">
                    <TextArea
                      rows={4}
                      placeholder="Please share your fitness goals, any injuries or limitations, and what you hope to achieve..."
                    />
                  </Form.Item>

                  <Form.Item>
                    <motion.button
                      type="submit"
                      className="w-full bg-[#E6533C] hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Confirm Booking Request
                    </motion.button>
                  </Form.Item>
                </div>
              </Form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="flex items-center mb-6">
                <TrophyFilled className="text-[#E6533C] text-2xl mr-3" />
                <h3 className="text-xl font-semibold">
                  Why Choose Our Experts
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "🎯",
                    title: "Personalized Approach",
                    desc: "Custom programs based on your unique needs",
                  },
                  {
                    icon: "📊",
                    title: "Data-Driven Results",
                    desc: "Track progress with advanced analytics",
                  },
                  {
                    icon: "🏆",
                    title: "Proven Methodologies",
                    desc: "Science-backed training techniques",
                  },
                  {
                    icon: "💼",
                    title: "Professional Standards",
                    desc: "Fully certified and insured",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-gray-300 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pricing */}
            <Card className="shadow-lg border-0">
              <div className="flex items-center mb-6">
                <BarChartOutlined className="text-[#E6533C] text-xl mr-3" />
                <h3 className="text-lg font-semibold">Investment Options</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    sessions: "Single Session",
                    price: "$125",
                    duration: "60 min",
                  },
                  {
                    sessions: "Starter Package",
                    price: "$575",
                    duration: "5 sessions",
                    popular: true,
                  },
                  {
                    sessions: "Professional Package",
                    price: "$1,095",
                    duration: "10 sessions",
                  },
                ].map((pkg, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 ${
                      pkg.popular
                        ? "border-[#E6533C] bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">{pkg.sessions}</div>
                        <div className="text-sm text-gray-600">
                          {pkg.duration}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-[#E6533C]">
                        {pkg.price}
                      </div>
                    </div>
                    {pkg.popular && (
                      <div className="text-xs text-[#E6533C] font-medium mt-2">
                        Most Popular Choice
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <h3 className="font-semibold mb-4 flex items-center">
                <PhoneOutlined className="text-[#E6533C] mr-2" />
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <PhoneOutlined className="mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MailOutlined className="mr-3" />
                  <span>bookings@elitefitness.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <EnvironmentOutlined className="mr-3" />
                  <span>123 Professional Ave, Suite 400</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  <div className="font-medium">Office Hours:</div>
                  <div>Mon-Fri: 6:00 AM - 9:00 PM</div>
                  <div>Weekends: 7:00 AM - 7:00 PM</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSessionPage;
