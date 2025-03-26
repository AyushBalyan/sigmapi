import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
  const features = [
    {
      icon: "/Home/Network.svg",
      title: "Lorem Ipsum",
      description: "Vivamus sed arcu, sed posuere tortor."
    },
    {
      icon: "/Home/Knowledge.svg",
      title: "Amet Sit",
      description: "Vivamus sed arcu, sed posuere tortor."
    },
    {
      icon: "/Home/Settings.svg",
      title: "Consectetur",
      description: "Vivamus sed arcu, sed posuere tortor."
    }
  ];

  const benefits = [
    {
      title: "Expert Insights: Learn from diverse experts."
    },
    {
      title: "Practical Skills: Master real-world challenges."
    },
    {
      title: "Personalized Mentorship: Navigate with tailored guidance."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* How It Works Column */}
          <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 text-center md:text-left">
              How It Works
            </h2>
            <p className="text-gray-600 mb-10 text-center md:text-left">
              connect with experts, learn, collaborate, and innovate
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <Link
                href="/learn-more"
                className="bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* What You Get Column */}
          <div className="w-4/5 mx-auto justify-center items-center bg-blue-50 rounded-2xl p-8 md:p-10 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 text-center">
              What You Get
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              Nulla quis lorem ut libero malesuada feugiat.
            </p>

            <div className="space-y-6 flex-grow">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-800 font-medium text-center">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}