import type { Metadata } from 'next';
import SeekersHero from '@/components/Seekers/SeekersHero';
import ExploreMITLab from '@/components/Seekers/ExploreMITLab';
import FeaturesSection from '@/components/Seekers/FeaturesSection';
import HowItWorksSection from '@/components/Seekers/HowItWorksSection';
import Blogs from '@/components/global/Blogs';
import JoinTeamBanner from '@/components/global/JoinTeamBanner';


export default function SeekersPage() {
  return (
    <div className='mx-auto pb-40'>
      <SeekersHero />
      <ExploreMITLab />
      <FeaturesSection />
      <HowItWorksSection />
      <Blogs />
      <JoinTeamBanner />
    </div>
  );
}