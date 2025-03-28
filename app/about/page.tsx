import type { Metadata } from 'next';
import AboutHero from '@/components/AboutUs/AboutHero';
import ExploreMITAbout from '@/components/AboutUs/ExploreMITAbout';
import WhoAreWe from '@/components/AboutUs/WhoWeAre';
import AboutHowItWorks from '@/components/AboutUs/AboutHowItWorks';
import WhatYouGet from '@/components/AboutUs/WhatYouGet';
import JoinTeamBanner from '@/components/global/JoinTeamBanner';
import Blogs from '@/components/global/Blogs';


export default function AboutPage() {
  return (
    <div className='mx-auto pb-40'>
      <AboutHero />
      <ExploreMITAbout />
      <WhoAreWe />
      <AboutHowItWorks />
      <WhatYouGet />
      <Blogs />
      <JoinTeamBanner />
    </div>
  );
}