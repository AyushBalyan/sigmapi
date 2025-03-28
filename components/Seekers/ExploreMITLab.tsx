import Image from 'next/image';
import CachedS3Image from '../global/CachedS3Image';
import Link from 'next/link';

export default function ExploreMITLab() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with blue square background */}
          <div className="relative">
            {/* Light blue square behind the image */}
            <div className="absolute top-8 -left-8 w-full h-full bg-green-100 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                <CachedS3Image
                  src="/Seekers/ExploreMitLab.png"
                  alt="Person presenting to a group in a brick-walled workspace"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Explore the MIT LAB
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              href="/explore-mit"
              className="inline-block bg-[#5BD77E] hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
            >
              WATCH NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}