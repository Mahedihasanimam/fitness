
import Footer from "@/components/share/Footer";
import Habits from "@/components/Habits";
import Hero from "@/components/Hero";
import TrainingAndExersize from "@/components/treaining/TrainingAndExersize";
import { ClockCircleFilled, ClockCircleOutlined, MailFilled, MailOutlined } from "@ant-design/icons";
import RunSection from "@/components/RunSection";


export default function Home() {
  return (
    <main className="font-inter">
      <div className="bg-black text-white p-3   w-full lg:block md:block hidden">
      <div className=" flex items-center justify-between px-6 pr-8   container mx-auto">
        <div className="">
          <h3 className=" text-sm">
            <ClockCircleOutlined style={{color: "red"}	}/> Start on : 08:00 AM- 05:00 PM
          </h3>
        </div>
        <div>
          <p className="text-sm">
            <MailFilled style={{color: "red"}} /> example@example.com
          </p>
        </div>
      </div> 
      </div>
      <Hero/>
      <Habits/>
      <RunSection/>
      <TrainingAndExersize/>
      <Footer/>
    </main>
  );
}
