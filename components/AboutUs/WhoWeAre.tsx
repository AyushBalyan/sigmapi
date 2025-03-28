import Image from 'next/image';

export default function WhoAreWe() {
  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Who Are We
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget 
          tortor risus. Proin eget tortor risus. Pellentesque
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image 
                src="/Home/Target.svg" 
                alt="Mission Icon" 
                width={64} 
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor.
            </p>
          </div>
          
          {/* Our Vision */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image 
                src="/Home/Leadership.svg" 
                alt="Vision Icon" 
                width={64} 
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor.
            </p>
          </div>
          
          {/* Our Goals */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image 
                src="/Home/Award.svg" 
                alt="Goals Icon" 
                width={64} 
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Goals</h3>
            <p className="text-gray-600 text-sm">
              Vivamus sed arcu, sed pharetra sed arcu, sed posuere tortor posuere tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}