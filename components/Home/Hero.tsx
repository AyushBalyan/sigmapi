import CachedS3Image from '../global/CachedS3Image';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-10 md:py-0 relative lg:mb-[250px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-8 md:pr-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 pt-40 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FBBC05] mb-4">
              Community of Expertise
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Ultimate Brilliance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Sigma-Pi, a digital community connecting experts
              and learners, fostering innovation, and solving
              complex engineering problems together.
            </p>
            <div>
              <Link 
                href="/join" 
                className="inline-block bg-[#5BD77E] hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200"
              >
                JOIN US
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-[700px] h-[400px] md:h-[500px]">
            <div className="w-full h-full relative">
              <CachedS3Image
                src="/Home/Hero.png"
                alt="Collaborative workspace with team members and sticky notes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Play Button - Positioned at the intersection with halo effect */}
          <div className="absolute top-2/3 lg:left-1/2 transform -translate-y-1/2 lg:-translate-x-1/2 z-10 order-3">
            {/* Outer halo circle */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-[#616161]/10 rounded-full flex items-center justify-center">
              {/* Middle halo circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#4B4B4B]/30 rounded-full flex items-center justify-center">
                {/* Inner red play button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <Image 
                    src="/Home/YoutubeIcon.svg"
                    alt="Play video"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}