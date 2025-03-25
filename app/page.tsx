import Hero from "@/components/Home/Hero";
import Empowering from "@/components/Home/Empowering";
import WhoAreWe from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Empowering />
        <WhoAreWe />
        
      </div>
    </div>
  );
}