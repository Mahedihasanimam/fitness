"use client";

import BmiCalculator from "@/components/BMICalculator/BmiCalculator";
import ContactUs from "@/components/ContactUs";
import Habits from "@/components/Habits";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import RunSection from "@/components/RunSection";
import Team from "@/components/Team";
import TrainingAndExercise from "@/components/treaining/TrainingAndExercise";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <main className="font-inter">
      <Hero />
      <Habits />
      <RunSection />
      <TrainingAndExercise />
      <BmiCalculator />
      <Membership />
      <Team />
      <ContactUs />
    </main>
  );
}
