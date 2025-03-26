import Image from 'next/image';
import CachedS3Image from '../global/CachedS3Image';
import Link from 'next/link';

export default function Expertise() {
  
  return (
    <div className="w-full">
      {/* Full-width image section (top half) */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <CachedS3Image
            src="/Home/Expertise.png"
            alt="Collaboration meeting"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-opacity-40"></div>
        </div>
      </section>

      {/* Inner Peace Card (positioned at the intersection) */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 -mt-40 lg:-mt-48">
        <div className="bg-white aspect-4/3 rounded-xl shadow-xl p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/Home/Hr.svg"
                alt="Inner Peace Icon"
                width={80}
                height={80}
                className="w-40 h-40"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
              Getting Inner Peace
            </h2>
            <p className="text-gray-600 max-w-md">
              Our community not only fosters professional growth but also promotes a balanced approach to learning and development.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Hubs Section (bottom half) */}
      <section className="w-full py-16 md:py-24 lg:py-80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/* Left Column - Expertise Hubs Grid */}
            <div className=" mx-auto grid grid-cols-2 gap-4">
              {/* {expertiseAreas.map((area, index) => (
                <div className={`p-8 w-40 rounded-lg flex flex-col items-center text-white`}>
                  <div className="mb-4">
                    <Image
                      src={area.icon}
                      alt={area.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-medium text-center">{area.title}</p>
                </div>
              ))} */}
              <div className={`bg-cyan-500 p-8 w-40 rounded-tl-lg flex flex-col items-center text-white`}>
                  <div className="mb-4">
                    <Image
                      src="/Home/Tech.svg"
                      alt="Tech"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-medium text-center">Tech</p>
                </div>
                <div className={`bg-yellow-400 p-8 w-40 rounded-tr-lg flex flex-col items-center text-white`}>
                  <div className="mb-4">
                    <Image
                      src="/Home/Marketing.svg"
                      alt="Marketing"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-medium text-center">Marketing</p>
                </div>
                <div className={`bg-cyan-500 p-8 w-40 rounded-bl-lg flex flex-col items-center text-white`}>
                  <div className="mb-4">
                    <Image
                      src="/Home/Sales.svg"
                      alt="Sales"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-medium text-center">Sales</p>
                </div>
                <div className={`bg-cyan-500 p-8 w-40 rounded-br-lg flex flex-col items-center text-white`}>
                  <div className="mb-4">
                    <Image
                      src="/Home/Others.svg"
                      alt="Others"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-medium text-center">Others</p>
                </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Hubs of Expertise
              </h2>
              <p className="text-gray-600 mb-8 pr-28">
                A diverse hub of expertise spanning technology, engineering, humanities, and beyond. Our platform fosters connection, collaboration, and contribution among passionate learners and seasoned experts alike. Immerse yourself in our rich community, grow your skills, and contribute to shaping the future across various industries.
              </p>
              <div>
                <Link
                  href="/find-people"
                  className="inline-block border border-gray-400 rounded-full py-3 px-8 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  FIND YOUR PEOPLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}