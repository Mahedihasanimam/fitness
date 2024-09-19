'use client'
import Footer from "@/components/share/Footer";
import Habits from "@/components/Habits";
import Hero from "@/components/Hero";
import TrainingAndExersize from "@/components/treaining/TrainingAndExersize";
import { ClockCircleFilled, ClockCircleOutlined, MailFilled, MailOutlined } from "@ant-design/icons";
import RunSection from "@/components/RunSection";
import BmiCalculator from "@/components/BMICalculator/BmiCalculator";
import ContactUs from "@/components/ContactUs";
import Membership from "@/components/Membership";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Team from "@/components/Team";
// ..


export default function Home() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    })
  return (
    <main className="font-inter">

      <Hero/>
      <Habits/>
      <RunSection/>
      <TrainingAndExersize/>
      <BmiCalculator/>
      <Membership/>
      <Team/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
