import Hero from "@/components/Home/Hero";
import Empowering from "@/components/Home/Empowering";
import WhoAreWe from "@/components/Home/WhoWeAre";
import HowItWorks from "@/components/Home/HowItWorks";
import Expertise from "@/components/Home/Expertise";
import Blogs from "@/components/global/Blogs";
import DiscordCommunityBanner from "@/components/global/DiscordCommunityBanner";

export default function Home() {
  return (
    <div className="min-h-screen mb-40 mx-auto">
      <Hero />
      <Empowering />
      <WhoAreWe />
      <HowItWorks />
      <Expertise />
      <Blogs />
      <DiscordCommunityBanner />
    </div>
  );
}