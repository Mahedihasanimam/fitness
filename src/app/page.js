import MyCard from "@/components/Card";
import Habits from "@/components/Habits";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="font-inter">
      <Hero/>
      <Habits/>
      <MyCard/>
    </main>
  );
}
