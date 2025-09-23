"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import Hero2 from "@/components/Hero2";
// ..

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <main className="font-inter">
      <Hero2 />
    </main>
  );
}
