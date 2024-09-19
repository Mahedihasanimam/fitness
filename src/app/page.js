
import Footer from "@/components/share/Footer";
import Habits from "@/components/Habits";
import Hero from "@/components/Hero";
import TrainingAndExersize from "@/components/treaining/TrainingAndExersize";
import { ClockCircleFilled, ClockCircleOutlined, MailFilled, MailOutlined } from "@ant-design/icons";
import RunSection from "@/components/RunSection";


export default function Home() {
  return (
    <main className="font-inter">

      <Hero/>
      <Habits/>
      <RunSection/>
      <TrainingAndExersize/>
      <Footer/>
    </main>
  );
}
