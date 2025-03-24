import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FBBC05] mb-4">
              Community of Expertise
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
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

          {/* Right Column - Image with Play Button */}
          <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <Image
              src="/Home/Hero.png"
              alt="Collaborative workspace with team members and sticky notes"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200">
                <Image 
                  src="/play-icon.png"
                  alt="Play video"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}