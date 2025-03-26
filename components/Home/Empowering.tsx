import Image from 'next/image';
import CachedS3Image from '../global/CachedS3Image';
import Link from 'next/link';

export default function Empowering() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with blue square background */}
          <div className="relative">
            {/* Light blue square behind the image */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-blue-100 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                <CachedS3Image
                  src="/Home/Empowering.jpeg"
                  alt="Person presenting to a group in a brick-walled workspace"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            {/* Rainbow Icon */}
            <div className="mb-6">
              <Image 
                src="/Home/Rainbow.svg" 
                alt="Rainbow icon" 
                width={80} 
                height={48} 
                className="h-12 w-auto"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Empowering Innovation
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Our platform is a thriving community of experts from 
              diverse fields, all dedicated to empowering each 
              other's brilliance. We foster an environment that 
              encourages groundbreaking ideas, nurtures skill 
              development, and promotes collaborative problem-
              solving. Check out LinkedIn Community.
            </p>
            
            <div>
              <Link 
                href="https://www.linkedin.com/company/sigmapi" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 border-2 border-blue-600 rounded-full py-3 px-8 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                <Image 
                  src="/Home/Linkedin.svg" 
                  alt="LinkedIn"
                  width={24} 
                  height={24} 
                  className="h-6 w-6" 
                />
                <span>LINKEDIN</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}