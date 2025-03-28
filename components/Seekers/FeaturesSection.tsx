import React from 'react';
import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: "/Seekers/feature-icon-1.svg",
      title: "Lorem Ipsum Dolor",
      description: "Vivamus sed arcu, sed posuere tortor."
    },
    {
      icon: "/Seekers/feature-icon-2.svg", 
      title: "Amet Sit Consect",
      description: "Vivamus sed arcu, sed posuere tortor."
    },
    {
      icon: "/Seekers/feature-icon-3.svg",
      title: "Lorem Ipsum Dolor",
      description: "Vivamus sed arcu, sed posuere tortor."
    }
  ];

  return (
    <section className="w-full py-12 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-xl shadow-2xl py-20 px-8">
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
        </div>
      </div>
    </section>
  );
}