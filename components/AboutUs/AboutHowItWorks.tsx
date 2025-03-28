import React from 'react';
import Image from 'next/image';

export default function AboutHowItWorks() {
  const steps = [
    {
      icon: "/AboutUs/Leader.svg",
      title: "Lorem Ipsum",
      description: "Vivamus sed arcu, sed posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor. Vivamus sed arcu, sed posuere tortor posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor."
    },
    {
      icon: "/AboutUs/Feasibility.svg",
      title: "Lorem Ipsum",
      description: "Vivamus sed arcu, sed posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor. Vivamus sed arcu, sed posuere tortor posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor."
    },
    {
      icon: "/AboutUs/Exchange.svg",
      title: "Lorem Ipsum",
      description: "Vivamus sed arcu, sed posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor. Vivamus sed arcu, sed posuere tortor posuere tortor Vivamus sed arcu, sed posuere tortor posuere tortor."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-gray-600 mb-12">
            Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={step.icon}
                  alt={`Step ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}